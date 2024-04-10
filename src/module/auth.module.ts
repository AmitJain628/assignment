// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthController } from 'src/controller/auth/auth.controller';
import { UsersModule } from './user.module';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
})
export class AuthModule {}
