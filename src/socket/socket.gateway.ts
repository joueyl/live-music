import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
} from '@nestjs/websockets';
import {ValidateToken} from '../decorator/ParamsValidateToken'
import { Server, Socket } from 'socket.io';
import { JwtService } from '@nestjs/jwt';
@WebSocketGateway({ cors: true })
export class WebrtcGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly jwt: JwtService) {}
  afterInit(server: Socket) {
    server.use(async (client: any, next) => {
      const token = client.handshake.auth.room.token;
      if (!token) return next(new Error('请传输token'));
      try {
        this.jwt.verify(token);
        next();
      } catch (error) {
        return next(new Error(error));
      }
    });
  }
  async handleConnection(client: Socket) {}
  handleDisconnect(client: Socket) {
    console.log(`用户:${client.handshake.auth.user_name} 断开连接`);
  }

}
