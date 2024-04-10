import { IUser } from 'src/interface/user.interface';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from 'src/service/companion/users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    signUp(userDto: UserDto): Promise<IUser>;
}
