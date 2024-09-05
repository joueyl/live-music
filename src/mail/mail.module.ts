import { Module } from '@nestjs/common';
import {} from 'nodemailer'
import { MailService } from './mail.service';
@Module({
  providers: [MailService]
})
export class MailModule {}
