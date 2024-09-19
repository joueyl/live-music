import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginParams, RegisterPrams } from './dto/create-user.dto';
import { MailService } from 'src/mail/mail.service';
import { UserService as UserDB } from '../mongodb/User.service';
import { CodeServeice as CodeDB } from 'src/mongodb/Code.service';
import { JwtService } from '@nestjs/jwt';
// import { hash, compare } from 'bcrypt';
import {hash,compare} from 'bcryptjs'
import { ConfigService } from '@nestjs/config';
import {Request} from 'express'
import {SessionService} from '../mongodb/Session.service'
import * as dayjs from 'dayjs';
@Injectable()
export class UserService {
  constructor(
    private readonly mailservice: MailService,
    private readonly userdb: UserDB,
    private readonly codedb: CodeDB,
    private readonly sessiondb:SessionService,
    private readonly jwtService: JwtService,
  ) {}
  async register(body: RegisterPrams,req:Request) {
    const isExist = await this.codedb.findUserCode(body.email, body.code);
    const isEmailExist = await this.userdb.findUser(body);
    if (isEmailExist.length) throw new BadRequestException('邮箱已被注册');
    if (!isExist.length) throw new BadRequestException('验证码无效');
    const pass_word = await hash(body.pass_word, 10);
    this.userdb.addUser({ ...body, pass_word });
    const session = this.createToken(body,req)
    return session;
  }
  async sendCode(email: string) {
    const isexist = await this.codedb.findUserCode(email);
    const code = (Math.random() * 1000000).toFixed(0);
    if (!isexist.length) {
      await this.codedb.saveCode({ email, code });
    } else {
      await this.codedb.deleteCode(email);
    }
    this.mailservice.sendMail(email,code)
    return null;
  }
  async login(body:LoginParams,req:Request){
    // throw new HttpException("error",HttpStatus.FOUND)
    const isExist =await this.userdb.login(body)
    if(!isExist) throw new BadRequestException('未注册')
    const isVerify =await compare(body.pass_word,isExist.pass_word)
    if(!isVerify) throw new BadRequestException('账号或密码错误')
    const token = await this.createToken({...body,user_name:isExist.user_name},req)
    return token
  }
  async createToken(body:Partial<RegisterPrams>,req:Request){
    this.sessiondb.clearOldToken(body.email)
    let ip = req.ip;
    ip = req.headers['x-forwarded-for'] as undefined | string || ip;
    // 如果是多个 IP，取第一个
    if (Array.isArray(ip)) {
      ip = ip[0];
    }
    // 如果是 IPv6 映射的 IPv4 地址（如 ::ffff:192.168.1.1）
    if (ip.includes('::ffff:')) {
      ip = ip.split('::ffff:')[1];  // 提取 IPv4 地址
    }
    const session = {
      email:body.email,
      ip,
      updateTime:dayjs().unix(),
      endTime:dayjs().add(30,'day').unix(),
      token:this.jwtService.sign({email:body.email}),
      user_name:body.user_name
    }
   await this.sessiondb.addToken(session)
   return session
  }
}
