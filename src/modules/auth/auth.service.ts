import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async generateToken(permissions): Promise<{ token: string }> {
    const token = jwt.sign(permissions, process.env.SECRET_KEY);
    return { token };
  }
}
