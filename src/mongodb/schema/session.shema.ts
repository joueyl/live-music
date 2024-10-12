import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

@Schema()
export class Session extends Document{
    @Prop({required:true})
    email:string

    @Prop({required:true})
    ip:string

    @Prop({default:Date.now(),type:Date,expires:'30d'})
    createTime:Date

    @Prop({required:true,type:Number})
    updateTime:number

    @Prop({required:true,type:Number})
    endTime:number

    @Prop({required:true,type:String})
    token:string

    @Prop({required:true,type:String})
    user_name:string
}
export const sessionShema = SchemaFactory.createForClass(Session)