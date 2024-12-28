import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Ffmpeg from 'fluent-ffmpeg';
import { join, resolve } from 'path';
import { cwd } from 'process';
import { Readable } from 'stream';
@Injectable()
export class FfmpegService {
  ffmpeg = Ffmpeg;
  ffmpegProcess:Ffmpeg.FfmpegCommand
  constructor(private readonly config: ConfigService) {
    
    const ffmpegPath = resolve(
      process.cwd(),
      `./ffmpeg/${process.platform}/bin/ffmpeg`,
    );
  //  this.ffmpeg.setFfmpegPath(ffmpegPath);
  //   this.ffmpeg.setFfprobePath(ffmpegPath);
  }
  async publishRTMP(readStream: Readable) {
    this.ffmpegProcess = this.ffmpeg(readStream)
      .inputOptions('-re')
      .outputOptions([
        '-c:a aac',            // 使用 aac 编解码器
        '-g 50',               // 设置关键帧间隔
        '-f hls',              // 设置输出格式为 HLS
        '-hls_time 5',         // 每个 HLS 片段持续 5 秒
        '-hls_list_size 2',    // 列表中最多保持 2 个片段
        '-hls_flags delete_segments', // 删除旧的 HLS 片段
      ])
      .output(join(cwd(),'./m3u8/music.m3u8'))
    this.ffmpegProcess.run()
  }
}
