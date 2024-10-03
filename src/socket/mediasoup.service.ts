import { Injectable } from '@nestjs/common';
import { createWorker } from 'mediasoup';
import { RoomService } from '../mongodb/Room.service';
import { AddRoomParams } from 'src/room/dto/room.dto';
import {
  AppData,
  PlainTransport,
  Producer,
  Router,
  RtpCapabilities,
  WebRtcTransport,
} from 'mediasoup/node/lib/types';
import { resolve } from 'path';
interface IRoom {
  router: Router<AppData>;
  transparots: WebRtcTransport<AppData>[];
  producer: null | Producer<AppData>;
}
@Injectable()
export class Mediasoup {
  rooms = new Map<string, IRoom>();
  worker = createWorker({
    logLevel: 'warn',
    rtcMinPort: 40000,
    rtcMaxPort: 49999,
  });
  constructor(private readonly roomDb: RoomService) {}
  async createRoom(room: Partial<AddRoomParams>) {
    const rooms = await this.roomDb.findRooms(room);
    if (!rooms.length) throw new Error('房间不存在');
    if (!this.rooms.has(room._id)) {
      const router = await (
        await this.worker
      ).createRouter({
        mediaCodecs: [
          {
            kind: 'audio',
            mimeType: 'audio/opus',
            clockRate: 48000,
            channels: 2,
          },
        ],
      });
      this.rooms.set(room._id, { router, transparots: [], producer: null });
      await this.startVideoStream(room._id);
      return router;
    }
  }
  getRouter(roomId: string) {
    const room = this.rooms.get(roomId);
    return room || null;
  }
  async startVideoStream(roomId: string) {
    const room = this.getRouter(roomId);
    if (!room) new Error('房间未创建');
    const transport = await room.router.createPlainTransport({
      listenInfo: { protocol: 'udp', ip: '127.0.0.1',port:5004 },
      rtcpMux: true,
      comedia: true
    });
    
    return new Promise(async (resolve) => {
      console.log(`请推流至rtp://127.0.0.1:${transport.tuple.localPort}\nssrc:123456789`);
      const producer = await transport.produce({
        kind: 'audio',
        rtpParameters: {
          codecs: [
            {
              mimeType: 'audio/opus',
              payloadType: 97,
              clockRate: 48000,
              channels: 2,
            },
          ],
          encodings: [{ ssrc: 12345678 }],
        },
      });
      room.producer = producer;
      transport.on('tuple',(state)=>{
        console.log(state);
      })
      
      resolve(producer);
    });
  }
  async createConsumerTransport(roomId: string) {
    const room = this.getRouter(roomId);
    if (!room) throw new Error('房间不存在');
    const transport = await room.router.createWebRtcTransport({
      listenIps: [{ ip: '127.0.0.1', announcedIp: null }],
      enableSctp: true,
      enableUdp: true,
      enableTcp: true,
      preferUdp: true,
      maxSctpMessageSize: 262144,
    });
    transport.on('@close',()=>{
      console.log('已关闭');
    })
    room.transparots.push(transport);
    return {
      transport,
      params: {
        id: transport.id,
        iceParameters: transport.iceParameters,
        iceCandidates: transport.iceCandidates,
        dtlsParameters: transport.dtlsParameters,
      },
    };
  }
  async createProducer(room: IRoom, rtpCapabilities: RtpCapabilities) {
    try {
      const consumer = await room.transparots[room.transparots.length -1].consume({
        producerId: room.producer.id,
        rtpCapabilities,
        // paused: room.producer.kind == 'audio',
      });
      consumer.resume();
      return {
        producerId: room.producer.id,
        id: consumer.id,
        kind: consumer.kind,
        rtpParameters: consumer.rtpParameters,
        type: consumer.type,
        producerPaused: consumer.producerPaused,
      };
    } catch (error) {
      console.log(error);
    }
  }
}
