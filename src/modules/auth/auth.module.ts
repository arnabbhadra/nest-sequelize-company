import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { AuthStrategy } from './auth.strategy';
dotenv.config();
@Module({
  providers: [JwtService, AuthService, AuthStrategy],
  exports: [AuthService],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
    }),
  ],
})
export class AuthModule {}
