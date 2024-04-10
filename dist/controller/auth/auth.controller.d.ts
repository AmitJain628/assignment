import { UsersService } from 'src/service/companion/users.service';
export declare class AuthController {
    private readonly usersService;
    constructor(usersService: UsersService);
    login(email: string): Promise<{
        authorized: boolean;
        user: import("../../interface/user.interface").IUser;
        message?: undefined;
    } | {
        authorized: boolean;
        message: string;
        user?: undefined;
    }>;
}
