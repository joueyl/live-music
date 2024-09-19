import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ValidataBody } from '../decorator/ValidateBody';
import { AddRoomParams } from './dto/room.dto';
import { RoomService } from './room.service';
@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}
  @Post('add')
  @UseInterceptors(AnyFilesInterceptor())
  async addRoom(@ValidataBody(AddRoomParams) Body: AddRoomParams) {
    return this.roomService.addRoom(Body);
  }

  @Post("get")
  @UseInterceptors(AnyFilesInterceptor())
  async getRooms(){
    return this.roomService.getRooms()
  }
}
