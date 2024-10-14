import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { APP_GUARD } from '@nestjs/core';
import { Jwt } from 'src/decorator/ValidateToken';
import { JwtModule } from 'src/jwt/jwt.module';
import {HttpModule} from '@nestjs/axios'
import {MinioModule} from '../minio/minio.module'
import {FfmpegService} from '../ffmpeg/ffmpeg.service'
import { MongodbModule } from 'src/mongodb/mongodb.module';
import { SocketGateway } from 'src/socket/socket.gateway';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports:[JwtModule,HttpModule,MinioModule,MongodbModule,MulterModule.register({
    limits: {
      fileSize: 20 * 1024 * 1024, // 限制文件大小为5MB
    },
    fileFilter: (req, file, callback) => {
      // 动态检查允许的文件类型，可以通过ConfigService动态获取配置
      const allowedMimeTypes = ['audio/mpeg', 'image/png'];
      if (allowedMimeTypes.includes(file.mimetype)) {
        callback(null, true); // 接受文件
      } else {
        callback(new Error('不支持的文件'), false); // 拒绝文件
      }
    },
  })],
  controllers: [MusicController],
  providers: [MusicService,FfmpegService,SocketGateway],
})
export class MusicModule {}
