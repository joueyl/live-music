import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as Ffmpeg from 'fluent-ffmpeg';
import { resolve } from 'path';
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
    this.ffmpeg.setFfmpegPath(ffmpegPath);
    this.ffmpeg.setFfprobePath(ffmpegPath);
  }
  async publishRTMP(readStream: Readable) {
    this.ffmpegProcess = this.ffmpeg(readStream)
      .inputOptions('-re')
      .audioCodec('aac')
      .format('flv')
      .output(this.config.get('RTMP_URL'));
    this.ffmpegProcess.run()
  }
}
