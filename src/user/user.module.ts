import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MailModule } from '../mail/mail.module';
import {MongodbModule} from '../mongodb/mongodb.module'
import {JwtModule} from '../jwt/jwt.module'
@Module({
  imports: [
    MongodbModule,
    MailModule,
    JwtModule
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
