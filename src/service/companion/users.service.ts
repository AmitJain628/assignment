import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/schema/user.schema';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<IUser>) {}

    async create(UserDto: UserDto): Promise<IUser> {
        console.log("user servie", UserDto)
        const createdUser = await new this.userModel(UserDto);
        console.log("user servie 1", createdUser)
        return createdUser.save();
      }
    
      async findByEmail(email: string): Promise<IUser | null> {
        return this.userModel.findOne({ email }).exec();
      }
}