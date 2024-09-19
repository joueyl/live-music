import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
@Schema()
export class Room extends Document{
    @Prop({required:true,type:String,unique:true})
    name:string
    _id: number;
}
export const RoomSchema =  SchemaFactory.createForClass(Room)