// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from 'src/service/companion/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body('email') email: string) {
    const user = await this.usersService.findByEmail(email);

    if (user) {
      return {
        authorized: true,
        user,
      };
    }

    return {
      authorized: false,
      message: 'User not found',
    };
  }
}
