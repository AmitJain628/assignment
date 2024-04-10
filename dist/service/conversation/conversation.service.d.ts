import { HttpService } from '@nestjs/common';
import { Model } from 'mongoose';
import { IConversation } from 'src/interface/conversation.interface';
export declare class ConversationService {
    private readonly conversationModel;
    private readonly httpService;
    constructor(conversationModel: Model<IConversation>, httpService: HttpService);
    createConversation(userId: string, cardId: string, userInput: string): Promise<IConversation>;
    private generateBotResponse;
}
