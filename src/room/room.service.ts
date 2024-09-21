import {
  Injectable,
} from '@nestjs/common';
import { RoomService as RoomDbService } from '../mongodb/Room.service';
import { AddRoomParams } from './dto/room.dto';
@Injectable()
export class RoomService {
  constructor(private readonly roomDB: RoomDbService) {}
  async addRoom(addParams: Partial<AddRoomParams>) {
    await this.roomDB.addRoom(addParams);
  }
  async getRooms(){
    return await this.roomDB.getRooms()
  }
  async roomExist(room:Partial<AddRoomParams>){
    return await this.roomDB.findRooms(room)
  }
}
