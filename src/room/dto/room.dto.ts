import { IsOptional, IsString } from 'class-validator'
import {Type} from 'class-transformer'
export class AddRoomParams{
    @IsString()
    @IsOptional()
    @Type(()=>String)
    readonly name:string
}