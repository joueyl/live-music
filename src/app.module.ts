import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import {SocketModule} from './socket/socket.module'
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    RoomModule,
    SocketModule
  ],
  providers: []
})
export class AppModule {}
