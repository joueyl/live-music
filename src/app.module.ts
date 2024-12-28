import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { MusicModule } from './music/music.module';
import { ServeStaticModule } from '@nestjs/serve-static'
import { SocketGateway } from './socket/socket.gateway';
import { join, resolve } from 'node:path';
import { cwd } from 'node:process';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UserModule,
    MusicModule,
    ServeStaticModule.forRoot({
      rootPath: join(cwd(),'./client'),
      serveRoot: '/'
    }, {
      rootPath:join(cwd(),'./m3u8'),
      serveRoot:'/m3u8'
    })
  ],
  providers: []
})
export class AppModule { }
