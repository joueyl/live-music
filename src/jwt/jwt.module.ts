import { Module } from '@nestjs/common';
import { JwtModule as JWTModule } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { JwtService as jwtService } from './jwt.service';
@Module({
  imports: [
    JWTModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get('JWT_EXPIRES_IN'),
          },
        };
      },
    }),
  ],
  providers: [jwtService],
  exports: [JWTModule],
})
export class JwtModule {}
