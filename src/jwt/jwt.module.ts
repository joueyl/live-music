import { Module } from '@nestjs/common';
import { JwtModule as JWTModule,JwtService } from '@nestjs/jwt';
import { ConfigService, ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    JWTModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN'),
        },
      }),
    }),
  ],
  providers:[JwtService],
  exports:[JwtService]
})
export class JwtModule {}
