import { Injectable, UseGuards } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { MinioService } from '../minio/minio.service';
import { FfmpegService } from '../ffmpeg/ffmpeg.service';
import { Readable } from 'stream';
import {SocketGateway} from '../socket/socket.gateway'
@Injectable()
export class MusicService {
  currentMusic: string | null = null
  playList:{ name: string }[] = [];
  constructor(
    private readonly http: HttpService,
    private readonly config: ConfigService,
    private readonly minio: MinioService,
    readonly ffmpeg: FfmpegService,
    private readonly socket:SocketGateway
  ) {
    this.init()
  }
  /**
   * 获取oss
   */
  async getList() {
    const allMusic = this.minio.client.listObjects('musics');
    return await new Promise<{ name: string }[]>((resolve) => {
      const data: { name: string }[] = [];
      allMusic.on('data', (obj: { name: string }) => {
        data.push(obj);
      });
      allMusic.on('end', () => {
        resolve(data);
      });
    });
  }
  async publish(bucketName: string, objectName: string,immediate:boolean=false) {
    try {

      const stream = await this.getMusicStream(bucketName, objectName);
      const combinedBuffer = Buffer.concat(stream);
      const readStream = new Readable();
      readStream._read = () => { };
      readStream.push(combinedBuffer);
      readStream.push(null);
      await this.ffmpeg.publishRTMP(readStream)
      this.ffmpeg.ffmpegProcess.on('start', () => {
        console.log('开始播放:', objectName);
      })
      this.ffmpeg.ffmpegProcess.on('progress', (res) => {
        const [hour, minutes, seconds] = res.timemark.split(':')
        const s = Number(seconds)
        if(s>=5&&s<5.2){
          this.currentMusic = objectName
          this.socket.handleUpdate({
            ...this.playList.find((item)=>item.name==objectName),
            immediate
          })
        }
      })
      this.ffmpeg.ffmpegProcess.on('end', () => {
        this.autoPlay(objectName)
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
  async uploadMusic(file: Express.Multer.File) {
    const readStream = new Readable()
    readStream.push(file.buffer)
    readStream.push(null)
    readStream._read = () => { }
    return await this.minio.client.putObject('musics', file.originalname, readStream, file.size)
  }
  /**
   * 初始化,默认从oss列表的第一个开始播放
   */
  async init(){
    this.playList = await this.getList()
    this.publish('musics',this.playList[0].name,true)
  }
  async autoPlay(musicName:string){
    const preIndex = this.playList.findIndex(item=>item.name == musicName)
    const totail = this.playList.length
    if(preIndex +1 < totail){
      this.publish('musics',this.playList[preIndex +1 ].name)
    }
    
  }
}
