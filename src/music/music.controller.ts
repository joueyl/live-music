import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { MusicService } from './music.service';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { SPD } from './dto/music.dto';
@Controller('music')
export class MusicController {
  constructor(
    private readonly musicService: MusicService,
  ) {
    
  }
  @Post('get_spd')
  @UseInterceptors(AnyFilesInterceptor())
  async handleSpd(@Body() body: SPD) {
    return await this.musicService.getSpd(body.spd);
  }
  @Post('get_list')
  async handleGetList(){
    return this.musicService.getList()
  }
  
}
