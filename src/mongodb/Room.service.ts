import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddRoomParams } from '../room/dto/room.dto';
import { Room } from './schema/room.shema';
@Injectable()
export class RoomService {
  constructor(@InjectModel('room') private readonly room: Model<Room>) {}
  async addRoom(addParams: Partial<AddRoomParams>) {
    const newRoom =new this.room(addParams);
    await newRoom.save();
  }
  async getRooms(){
    return this.room.find()
  }
  async findRooms(room:Partial<AddRoomParams>){
    return this.room.find(room)
  }
}
