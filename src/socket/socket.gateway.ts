import { WebSocketGateway, WebSocketServer, OnGatewayConnection } from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { MusicService } from '../music/music.service'
import { forwardRef, Inject } from '@nestjs/common';
@WebSocketGateway({ cors: true })
export class SocketGateway implements OnGatewayConnection {
  constructor(@Inject(forwardRef(() => MusicService)) private readonly music: MusicService) { }
  handleConnection(client: Socket, ...args: any[]) {
    this.sendServerData()
  }
  @WebSocketServer()
  server: Socket
  handleUpdate(music: any) {
    this.server.emit('update:music', music)
  }
  listUpdate(res: any) {
    this.server.emit('update:list', res)
  }
  pushData(chunk: any) {
    this.server.emit('data', chunk)
  }
  sendServerData() {
    this.server.emit('server:data', {
      list:this.music.playList,
      currentMusic:this.music.currentMusic,

    })
  }
}
