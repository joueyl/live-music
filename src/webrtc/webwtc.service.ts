import { Injectable } from '@nestjs/common';
import * as Peer from 'simple-peer';
import {createReadStream} from 'node:fs';
import ffmpeg from 'fluent-ffmpeg';
import * as wrtc from 'wrtc';
import { Readable } from 'node:stream';
@Injectable()
export class WebrtcService {
  peer: Peer.Instance;
  constructor() {
   this.createPeer()
    
  }
  createPeer(){
    this.peer = this.peer = new Peer({
      initiator:false,
      trickle:true,
      wrtc:wrtc as any
    })
    
  }
  pushAudioStream() {
      const audioStream = createReadStream('F:/tmp/We Can’t Stop-Miley Cyrus.128.mp3');
      audioStream.on('data',(chunk)=>{
        this.peer.send(chunk)
      })
      audioStream.on('end', () => {
        console.log('File transfer complete');
        this.peer.emit('end')
      });
      // this.peer.addTrack(ffmpegStream);
    }
}
