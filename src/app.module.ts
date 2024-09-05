import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync(
      {
        imports:[ConfigModule],
        inject:[ConfigService],  
        useFactory:(configService:ConfigService)=>{
          return {
          uri:`mongodb://${configService.get("DATABASE_HOST")}:${configService.get("DATABASE_PORT")}`,
          user:configService.get("DATABASE_USER_NAME"),
          dbName:configService.get("DATABASE_NAME"),
          pass:configService.get('DATABASE_PASSWORD')
          }
        },
      }
    ),
    UserModule,
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
