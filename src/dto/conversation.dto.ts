import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class ConversationDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly userId: string;

    @IsString()
    @IsNotEmpty()
    readonly cardId: string;

    @IsString()
    @IsNotEmpty()
    readonly userInput: string;

    @IsString()
    @IsNotEmpty()
    readonly botResponse: string;

    @IsString()
    @IsNotEmpty()
    readonly timestamp: string;
}