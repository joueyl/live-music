import { Type } from 'class-transformer'
import {IsEmail, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength} from 'class-validator'
export class RegisterPrams{
    @IsString()
    @IsEmail({}, { message: '无效的邮箱地址' })
    readonly email:string


    @IsNumber()
    @Type(()=>Number)
    readonly code:string


    @IsString()
    @MinLength(4,{message:'用户名最少四个字符'})
    @MaxLength(10,{message:'用户名最多十个字符'})
    readonly user_name:string


    @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_])/, {
        message: '密码必须包含大小写字母、数字和特殊字符',
      })
    @IsString()
    @MinLength(6,{message:'密码最少六个字符'})
    @MaxLength(16,{message:'密码最多十六个字符'})
    readonly pass_word:string
}
export class SendCodePrams{
    @IsString()
    readonly email:string
}
export class LoginParams{
    @IsString()
    readonly email:string

    @IsString()
    @IsOptional()
    readonly user_name:string

    @IsString()
    pass_word:string
}
