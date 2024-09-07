import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterPrams } from './dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import {UserService as UserDB} from '../mongodb/User.service'
import { CodeServeice as CodeDB } from 'src/mongodb/Code.service';
import {JwtService} from '@nestjs/jwt'
import {hash,compare} from 'bcrypt'
import {ConfigService} from '@nestjs/config'
@Injectable()
export class UserService {
  constructor(
    private readonly mailservice: MailService,
    private readonly userdb:UserDB,
    private readonly codedb:CodeDB,
    private readonly jwtService:JwtService,
    private readonly configService:ConfigService
  ) {}
 async register(body:RegisterPrams){
    const isexist = await this.codedb.findUserCode(body.email,body.code) 
    const pass_word = await hash(body.pass_word,10)
    this.userdb.addUser({...body,pass_word})
    if(!isexist.length) throw new BadRequestException('验证码无效')
    return body
  }
async sendCode(email:string){
    const isexist =await this.codedb.findUserCode(email)
    const code = (Math.random()*1000000).toFixed(0)
    if(!isexist.length){
     await this.codedb.saveCode({email,code})
    }else{ 
      await this.codedb.deleteCode(email)
    }
    // this.mailservice.sendMail(email,code)
    return null
  } 
}
