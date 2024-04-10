// conversation.interface.ts
export class IConversation {
    readonly userId: string;
    readonly cardId: string;
    readonly userInput: string;
    readonly botResponse: string;
    readonly timestamp: Date;
}
  