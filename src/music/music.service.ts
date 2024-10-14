import { Injectable, UseGuards } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { MinioService } from '../minio/minio.service';
import { FfmpegService } from '../ffmpeg/ffmpeg.service';
import { Readable } from 'stream';
@Injectable()
export class MusicService {
  isFirst = true;
  musicList = [];
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    private readonly minio: MinioService,
   readonly ffmpeg: FfmpegService,
  ) {
    this.getList();
    
  }
  async getSpd(spd: string) {
    const whep_url = this.config.get('WHEP_URL');
    const { data } = await firstValueFrom(
      this.http.post(whep_url, spd, {
        headers: {
          'Content-Type': 'application/spd',
        },
      }),
    );
    return data;
  }
  async getList() {
    const allMusic = this.minio.client.listObjects('musics');
    return await new Promise<{name:string}[]>((resolve) => {
      const data:{name:string}[] = [];
      allMusic.on('data', (obj:{name:string}) => {
        data.push(obj);
      });
      allMusic.on('end', () => {
        if (this.isFirst&&data.length) {
          this.musicList = data;
          this.publish('musics', data[0].name as string);
          this.isFirst = false
        }
        resolve(data);
      });
    });
  }
  async publish(bucketName: string, objectName: string) {
    try {
      const stream = await this.getMusicStream(bucketName, objectName);
      const combinedBuffer = Buffer.concat(stream);
      console.log('开始播放',objectName);
      const readStream = new Readable();
      readStream._read = () => {};
      readStream.push(combinedBuffer);
      readStream.push(null);
      await this.ffmpeg.publishRTMP(readStream)
      this.ffmpeg.ffmpegProcess.on('end',()=>{
        this.musicList.shift()
        if(this.musicList[0]){
          this.publish('musics',this.musicList[0].name)
        }
      })
    } catch (error) {
      console.log(error);
    }
  }
  async getMusicStream(bucketName: string, objectName: string) {
    const musicArr: Buffer[] = [];
    return new Promise<Buffer[]>(async (resolve, reject) => {
      const stream = await this.minio.client.getObject(bucketName, objectName);
      stream.on('data', (chunk: Buffer) => {
        musicArr.push(chunk);
      });
      stream.on('error', (err) => {
        reject(err);
      });
      stream.on('end', () => {
        resolve(musicArr);
      });
    });
  }
  async uploadMusic(file:Express.Multer.File){
    const readStream = new Readable()
    readStream.push(file.buffer)
    readStream.push(null)
    readStream._read = ()=>{}
   return await this.minio.client.putObject('musics',file.originalname,readStream,file.size)
  }
}
