import {Document} from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Code extends Document{
    @Prop({required:true})
    code:string

    @Prop({required:true,type:String})
    email:string

    
    @Prop({default:Date.now(),expires:'2m'})
    createAt:Date
}
export const codeSchema = SchemaFactory.createForClass(Code)