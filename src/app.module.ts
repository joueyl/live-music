import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MusicModule } from './music/music.module';
import { SocketGateway } from './socket/socket.gateway';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    UserModule,
    MusicModule
  ],
  providers: [SocketGateway]
})
export class AppModule {}
