import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './User.service';
import { userSchema } from './schema/user.schema';
import { codeSchema } from './schema/code.shema';
import { CodeServeice } from './Code.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          uri: `mongodb://${configService.get('DATABASE_HOST')}:${configService.get('DATABASE_PORT')}`,
          user: configService.get('DATABASE_USER_NAME'),
          dbName: configService.get('DATABASE_NAME'),
          pass: configService.get('DATABASE_PASSWORD'),
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
    MongooseModule.forFeature([{name:'Code',schema:codeSchema}]),
  ],
  providers: [UserService,CodeServeice],
  exports:[UserService,CodeServeice]
})
export class MongodbModule {}
