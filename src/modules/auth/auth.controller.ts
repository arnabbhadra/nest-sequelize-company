import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { READ_PERMISSION, WRITE_PERMISSION } from 'src/core/constants';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/both')
  async generateToken(): Promise<{ token: string }> {
    const permissions: { permissions: string[] } = {
      permissions: [READ_PERMISSION, WRITE_PERMISSION],
    };
    return await this.authService.generateToken(permissions);
  }
  @Get('/single')
  async generateSingleToken(): Promise<{ token: string }> {
    const permissions: { permissions: string[] } = {
      permissions: [READ_PERMISSION],
    };
    return await this.authService.generateToken(permissions);
  }
}
