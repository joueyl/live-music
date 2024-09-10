import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
} from '@nestjs/websockets';
import {WebrtcService} from './webwtc.service'
import { Server, Socket } from 'socket.io';
@WebSocketGateway({ cors: true })
export class WebrtcGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly webrtc:WebrtcService) {}

  handleConnection(client: Socket) {
    console.log(client.handshake.auth);
    console.log('客户端已连接');
    client.emit('connectionSuccess');
  }

  @SubscribeMessage('offer')
  async sendAnser(@MessageBody() data: { sdp: any }, @ConnectedSocket() client: Socket) {
    console.log('接收到offer');
      this.webrtc.peer.signal(data.sdp)
      this.webrtc.peer.on('signal',(answer)=>{
        client.emit('answer',answer)
      })
  }
  @SubscribeMessage('iceCandidate')
  handleIceCandidate(@MessageBody() candidate: any) {
    this.webrtc.peer.signal(candidate);
  }
}
