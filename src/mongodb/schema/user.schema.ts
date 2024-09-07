 
// user.schema.ts
// import { Schema } from 'mongoose';
// export const userSchema = new Schema({
//   user_name: { type: String, required: true },
//   password: { type: String, required: true }
// });
import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'
export class User extends Document{
  @Prop({required:true,type:String,minlength:4,maxlength:10})
  user_name:string
  @Prop({required:true,type:String})
  pass_word:string
  @Prop({required:true,type:String})
  email:string

}
export const userSchema = SchemaFactory.createForClass(User)