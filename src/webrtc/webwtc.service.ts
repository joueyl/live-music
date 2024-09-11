import { Injectable } from '@nestjs/common';
import * as Peer from 'simple-peer';
import fs from 'node:fs';
import ffmpeg from 'fluent-ffmpeg';
import * as wrtc from 'wrtc';
@Injectable()
export class WebrtcService {
  peer: Peer.Instance;
  constructor() {
    this.peer = new Peer({
      initiator: false,
      trickle: true,
      wrtc: wrtc as any,
    });

    // 监听 peer 生成的信令数据 (用于信令交换)
    this.peer.on('signal', (data) => {
      // 这里的信令数据需要通过信令服务器发送给客户端
    });
    this.peer.on('error', (err) => {
      console.error('Peer connection error:', err);
    });
    // 当连接建立时，推送音频流
    this.peer.on('connect', () => {
      //   this.pushAudioStream();
    });

    // 处理接收流
    this.peer.on('stream', (stream) => {
      // 你可以在这里接收从客户端传来的流
    });
    
  }
  // pushAudioStream() {
  //     const audioStream = fs.createReadStream('path/to/audio/file.mp3');

  //     // 使用 ffmpeg 转换音频流
  //     const ffmpegStream = ffmpeg(audioStream)
  //       .audioCodec('libopus')
  //       .format('opus')
  //       .on('error', (err) => {
  //         console.error('FFmpeg error:', err);
  //       })
  //       .pipe();

  //     // 将转换后的音频流推送给 WebRTC 连接
  //     this.peer.addStream(ffmpegStream);
  //   }
}
