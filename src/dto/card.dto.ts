import { IsNotEmpty, IsString, MaxLength, IsArray } from "class-validator";

export class CardDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    readonly description: number;

    @IsString()
    @IsNotEmpty()
    readonly image: number;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly setting: string;

    @IsNotEmpty()
    @IsArray()
    readonly tags: string[];
}