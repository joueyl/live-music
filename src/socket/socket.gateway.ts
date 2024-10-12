import { SubscribeMessage, WebSocketGateway,WebSocketServer } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({cors:true})
export class SocketGateway {
  @WebSocketServer()
  server:Socket
  handleUpdate(name:any){
    this.server.emit('update:music',name)
  }
  listUpdate(res:any){
    this.server.emit('update:list',res)
  }
}
