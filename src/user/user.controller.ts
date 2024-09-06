import { Controller, Post, Body, UseInterceptors } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { UserService } from './user.service';
import { RegisterPrams,SendCodePrams } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ValidataBody } from '../decorator/ValidateBody';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  @UseInterceptors(AnyFilesInterceptor())
  register(@ValidataBody(RegisterPrams) body: RegisterPrams) {
    return this.userService.register(body)
  }
  @Post('sendCode')
  @UseInterceptors(AnyFilesInterceptor())
  sendCode(@ValidataBody(SendCodePrams) body:SendCodePrams){
    
  }
}
