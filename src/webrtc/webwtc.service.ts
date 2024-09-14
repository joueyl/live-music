import { Injectable } from '@nestjs/common';
import * as Peer from 'simple-peer';
import { createReadStream } from 'node:fs';
import * as ffmpeg from 'fluent-ffmpeg';
import * as wrtc from '@koush/wrtc';
import { platform } from 'node:os';
import { resolve } from 'node:path';
@Injectable()
export class WebrtcService {
  peer: Peer.Instance;
  constructor() {
    this.createPeer();
  }
  createPeer() {
    this.peer = this.peer = new Peer({
      initiator: false,
      trickle: true,
      wrtc: wrtc as any,
    });
  }
  async pushAudioStream() {
    const music = resolve(
      __dirname,
      '../../music/We Can’t Stop-Miley Cyrus.128.mp3',
    );
    let ffmpegPath = resolve(
      __dirname,
      `../../ffmpeg/${platform()}/bin/ffmpeg`,
    );
    if (platform() == 'darwin')
      ffmpegPath = resolve(__dirname, `../../ffmpeg/ffmpeg`);
    ffmpeg.setFfmpegPath(ffmpegPath);
    const ffmpegProcess = ffmpeg(music)
      .inputOption('-re')
      .audioCodec('libopus')
      .format('webm')
      .on('start', () => {
        console.log('开始播放');
      })
      .on('end', () => {
        console.log('播放结束');
      })
      .on('error', (err) => {
        console.log(err);
      });
    ffmpegProcess.pipe().on('data', (data) => {
      this.peer.write(data);
    });
    // audioStream.on('data', (chunk) => {
    //   this.peer.send(chunk);
    // });
    // audioStream.on('end', () => {
    //   console.log('File transfer complete');
    //   this.peer.emit('end');
    // });
    // this.peer.addTrack(ffmpegStream);
  }
}
