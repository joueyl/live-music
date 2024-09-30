import { Injectable } from '@nestjs/common';
import { createWorker } from 'mediasoup';
import { RoomService } from '../mongodb/Room.service';
import { AddRoomParams } from 'src/room/dto/room.dto';
import {
  AppData,
  PlainTransport,
  Producer,
  Router,
  WebRtcTransport,
} from 'mediasoup/node/lib/types';
import * as ffmpeg from 'fluent-ffmpeg';
import { resolve } from 'path';
@Injectable()
export class Mediasoup {
  rooms = new Map<
    string,
    {
      router: Router<AppData>;
      transparots: WebRtcTransport<AppData>[];
      producer: null | PlainTransport<AppData>;
    }
  >();
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
      listenIp: '127.0.0.1',
      rtcpMux: true,
      comedia: false,
    });
    const path = resolve(
      __dirname,
      '../../music/We Can’t Stop-Miley Cyrus.128.mp3',
    );
    const command = ffmpeg(path)
      .inputOptions('-re')
      .audioCodec('libopus')
      .outputOptions('-f', 'rtp')
      .output(`rtp://127.0.0.1:${transport.tuple.localPort}`)
      .run();
    const producer = await transport.produce({
      kind: 'audio',
      rtpParameters: {
        codecs: [
          {
            mimeType: 'audio/opus',
            payloadType: 100,
            clockRate: 48000,
            channels: 2,
          },
        ],
        encodings: [{ ssrc: Date.now() }],
        mid: 'audio',
      },
    });

    room.producer = transport;
  }
  async createConsumerTransport(roomId: string) {
    const room = this.getRouter(roomId);
    if (!room) throw new Error('房间不存在');
    const transport = await room.router.createWebRtcTransport({
      listenIps: [{ ip: '0.0.0.0', announcedIp: null }],
      enableUdp: true,
      enableTcp: true,
      preferUdp: true,
    });
    
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
  async createProducerTransport(roomId: string) {
    const room = this.getRouter(roomId);
    room.producer = await room.router.createPlainTransport({
      listenIp: { ip: '0.0.0.0', announcedIp: null },
      rtcpMux: true,
      comedia: false,
    });
  }
}
