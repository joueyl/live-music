import { Type } from 'class-transformer'
import {IsNumber, IsString} from 'class-validator'
export class CreateUserDto {
    @IsString()
    readonly user_name:string
    @IsString()
    readonly password:string
}
export class RegisterPrams{
    @IsString()
    readonly email:string
    @IsNumber()
    @Type(()=>Number)
    readonly code:string
    @IsString()
    readonly user_name:string
}
export class SendCodePrams{
    @IsString()
    readonly email:string
}
