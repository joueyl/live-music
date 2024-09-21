import {  IsNotEmpty, IsOptional, IsString } from 'class-validator'
import {Type} from 'class-transformer'
export class AddRoomParams{
    @IsString({message:'房间名必须为字符串'})
    @IsNotEmpty({message:"房间名不能为空"})
    // @IsOptional()
    @Type(()=>String)
    readonly name:string

    @IsOptional()
    @IsString()
    readonly _id:string
}