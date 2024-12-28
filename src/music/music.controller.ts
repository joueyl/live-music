import {
  All,
  BadRequestException,
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Query,
  UseInterceptors,
  Headers,
  UploadedFiles,
  UseGuards,
} from '@nestjs/common';

import { MusicService } from './music.service';
import {
  AnyFilesInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { Play, SPD } from './dto/music.dto';
import { ValidataBody } from 'src/decorator/ValidateBody';
import { SocketGateway } from '../socket/socket.gateway';
import { SessionService } from 'src/mongodb/Session.service';
import { Jwt } from 'src/decorator/ValidateToken';
@Controller('music')
@UseGuards(Jwt)
export class MusicController {
  constructor(
    private readonly musicService: MusicService,
    private readonly socket: SocketGateway,
    private readonly session: SessionService,
  ) {}
  @Post('get_list')
  async handleGetList() {
    return this.musicService.getList();
  }
  @All('play')
  @UseInterceptors(AnyFilesInterceptor())
  async handlePlay(
    @ValidataBody(Play) body: Play,
    @Query('name') name: string,
    @Headers('authorization') token: string,
  ) {
    const Operator = await this.session.getUser(token);
    if (name) body.name = name;
    const list = await this.musicService.getList();
    if (list.find((item) => item.name == body.name)) {
      this.musicService.ffmpeg.ffmpegProcess
        .kill('SIGKILL')
        .on('error', (err) => {});
      this.musicService.publish('musics', body.name,true);

      this.socket.handleUpdate({
        operator: Operator.user_name,
        music: body.name,
      });
    } else {
      throw new BadRequestException(
        new HttpException('音频不存在', HttpStatus.NOT_FOUND),
      );
    }
  }
  @Post('upload')
  @UseInterceptors(FilesInterceptor('files'))
  async handleUpload(
    @UploadedFiles() file: Express.Multer.File[],
    @Headers('authorization') token: string,
  ) {
    const promises = file.map((item) => this.musicService.uploadMusic(item));
    await Promise.all(promises);
    const operator = await this.session.getUser(token);
    const res = {
      operator,
      res: file.map((item) => {
        delete item.buffer;
        return item;
      }),
    };
    this.socket.listUpdate(res);
    return res;
  }
}
