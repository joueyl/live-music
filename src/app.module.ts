import { Module,Controller, Get, Render } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { WebrtcGateway } from './webrtc/webrtc.gateway';
import { WebrtcService } from './webrtc/webwtc.service';
import {MinioService} from './webrtc/minio.service'
import { RoomModule } from './room/room.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    RoomModule
  ],
  providers: [WebrtcGateway,MinioService,WebrtcService]
})
export class AppModule {}
