import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class UserDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly nickname: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly country: string;

    @IsNumber()
    @IsNotEmpty()
    readonly age: number;
}