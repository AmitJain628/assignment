import { ConversationService } from 'src/service/conversation/conversation.service';
import { IConversation } from 'src/interface/conversation.interface';
export declare class ConversationController {
    private readonly conversationService;
    constructor(conversationService: ConversationService);
    createConversation(requestBody: any): Promise<IConversation>;
}
