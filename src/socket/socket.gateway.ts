import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  SubscribeMessage,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import { ValidateToken } from '../decorator/ParamsValidateToken';
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { AddRoomParams } from 'src/room/dto/room.dto';
import { Mediasoup } from './mediasoup.service';
import type { AppData, Producer } from 'mediasoup-client/lib/types';
import { WebRtcTransport } from 'mediasoup/node/lib/types';
@WebSocketGateway({ cors: true })
export class WebrtcGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  productTransport: WebRtcTransport<AppData>;
  consumerTransport: WebRtcTransport<AppData>;
  produce: Producer<AppData> & any;
  constructor(
    private readonly jwt: JwtService,
    private readonly medias: Mediasoup,
  ) {}
  afterInit(server: Socket) {
    server.use(async (client: any, next) => {
      const token = client.handshake.auth?.room?.token;
      if (!token) return next(new Error('请传输token'));
      try {
        this.jwt.verify(token);
        next();
      } catch (error) {
        console.log('token错误');
        return next(new Error(error));
      }
    });
  }
  async handleConnection(client: Socket, ...args: any[]) {
    try {
      await this.medias.createRoom(client.handshake.auth.room);
    } catch (error) {
      client.emit('error',{message:'房间不存在'})
      client.disconnect()
    }
    const room = this.medias.getRouter(client.handshake.auth.room._id);
    client.emit('CreateRoomed');
  }
  handleDisconnect(client: any) {}
  @SubscribeMessage('getRouterRtpCapabilities')
  async GetRTP(client: Socket) {
    const room = this.medias.getRouter(client.handshake.auth.room._id);
    return room.router.rtpCapabilities;
  }
  @SubscribeMessage('getConsume')
  async getConsume(client: Socket) {
   const {params,transport} =await this.medias.createConsumerTransport(client.handshake.auth.room._id);
   transport.on('icestatechange',(state)=>{
    if(state=='disconnected') transport.close()
   })
   return params
  }
  @SubscribeMessage('connectConsumerTransport')
  async consumeConnect(client:Socket,param:any){
    const room = this.medias.getRouter(client.handshake.auth.room._id);
    console.log(room.transparots.length);
    await room.transparots[room.transparots.length - 1].connect({dtlsParameters:param.dtlsParameters})
    return {message:'成功'}
  }
  @SubscribeMessage('consume')
  async getStream(client:Socket,{rtpCapabilities}:any){
    const room = this.medias.getRouter(client.handshake.auth.room._id)
   return await this.medias.createProducer(room,rtpCapabilities)
    
  }
}
