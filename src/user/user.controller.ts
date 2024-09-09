import { Controller, Post, Body, UseInterceptors, Req,UseGuards } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { RegisterPrams,SendCodePrams,LoginParams } from './dto/create-user.dto';
import { ValidataBody } from '../decorator/ValidateBody';
import {Request} from 'express'
import {Jwt} from 'src/decorator/ValidateToken'
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  @UseInterceptors(AnyFilesInterceptor())
  // @UseGuards(Jwt)
  register(@ValidataBody(RegisterPrams) body: RegisterPrams,@Req() req:Request) {
    return this.userService.register(body,req)
  }
  @Post('sendCode')
  @UseInterceptors(AnyFilesInterceptor())
  sendCode(@ValidataBody(SendCodePrams) body:SendCodePrams){
   return this.userService.sendCode(body.email)
  }

  @Post('login')
  @UseInterceptors(AnyFilesInterceptor())
  login(@ValidataBody(LoginParams) body:LoginParams,@Req() req:Request){
    return this.userService.login(body,req)
  }
}
