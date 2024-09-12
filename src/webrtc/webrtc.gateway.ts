import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';
import {WebrtcService} from './webwtc.service'
import { Server, Socket } from 'socket.io';
@WebSocketGateway({ cors: true })
export class WebrtcGateway implements OnGatewayConnection,OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly webrtc:WebrtcService) {}

  handleConnection(client: Socket) {
    console.clear()
    console.log(`用户:${client.handshake.auth.user_name} 已连接信令服务器`);
    if(this.webrtc.peer.destroyed){
      this.webrtc.peer.destroy()
      this.webrtc.createPeer()
      this.webrtc.peer.on('connect',()=>{
        this.webrtc.pushAudioStream()
        console.log(`用户: ${client.handshake.auth.user_name} 连接webrtc成功`);
      })
    }
  }
  handleDisconnect(client: Socket) {
    console.log(`用户:${client.handshake.auth.user_name} 断开连接`);
  }
  @SubscribeMessage('offer')
  async sendAnser(@MessageBody() data, @ConnectedSocket() client: Socket) {
      this.webrtc.peer.signal(data)
      this.webrtc.peer.on('signal',(answer)=>{
        client.emit('answer',answer)
      })
  }
}
