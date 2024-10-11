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
@Module({
  imports:[JwtModule,HttpModule,MinioModule,MongodbModule],
  controllers: [MusicController],
  providers: [MusicService,{
    provide:APP_GUARD,
    useClass:Jwt
  },FfmpegService],
})
export class MusicModule {}
