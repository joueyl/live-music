import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MailModule } from '../mail/mail.module';
import {MongodbModule} from '../mongodb/mongodb.module'
@Module({
  imports: [
    MongodbModule,
    MailModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
