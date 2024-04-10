import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { IUser } from 'src/interface/user.interface';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from 'src/service/companion/users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post('signup')
    async signUp(@Body() userDto: UserDto) {
      console.log("----users", userDto);
      return this.usersService.create(userDto);
    }
}