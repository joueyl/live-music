import { Injectable } from '@nestjs/common';
import { CreateUserDto,RegisterPrams } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MailService } from 'src/mail/mail.service';
import {UserService as UserDB} from '../mongodb/User.service'
import { CodeServeice as CodeDB } from 'src/mongodb/Code.service';
@Injectable()
export class UserService {
  constructor(
    private readonly mailservice: MailService,
    private readonly userdb:UserDB,
    private readonly codedb:CodeDB
  ) {}
  register(body:RegisterPrams){
    console.log(this.codedb);
    return body
  }
  sendCode(email:string){

  }
}
