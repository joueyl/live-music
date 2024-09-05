import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
@Injectable()
export class MailService {
    private transport
    constructor(){
        this.transport = nodemailer.createTransport({
            host:'smtp.163.com'
        })
    }
}
