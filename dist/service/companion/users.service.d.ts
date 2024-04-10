import { Model } from "mongoose";
import { UserDto } from 'src/dto/user.dto';
import { IUser } from 'src/interface/user.interface';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<IUser>);
    create(UserDto: UserDto): Promise<IUser>;
    findByEmail(email: string): Promise<IUser | null>;
}
