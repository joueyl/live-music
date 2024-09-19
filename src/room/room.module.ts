import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import {MongodbModule} from '../mongodb/mongodb.module'
@Module({
  imports:[MongodbModule],
  controllers: [RoomController],
  providers: [RoomService]
})
export class RoomModule {}
