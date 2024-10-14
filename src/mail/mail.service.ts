import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
import {Transporter} from 'nodemailer'
import {ConfigService} from '@nestjs/config'
@Injectable()
export class MailService {
    private transport:Transporter
    constructor(private readonly configService:ConfigService){
        this.transport = nodemailer.createTransport({
            host:this.configService.get('SMTP_HOST'),
            port:this.configService.get('SMTP_PORT'),
            secure:true,
            auth:{
                user:this.configService.get('SMTP_USER'),
                pass:this.configService.get('SMTP_PASS')
            }
        })
    }
    async sendMail(email:string,code:string|number){
      return await  this.transport.sendMail({
            from:'Music Live <dzb08042@163.com>',
            to:email,
            subject:`验证码`,
            text:`验证码:${code}\n验证码两分钟后失效`
        })
    }
}
