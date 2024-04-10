// src/conversation/conversation.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ConversationService } from 'src/service/conversation/conversation.service';
import { IConversation } from 'src/interface/conversation.interface';

@Controller('conversations')
export class ConversationController {
  constructor(private readonly conversationService: ConversationService) {}

  @Post()
  async createConversation(@Body() requestBody): Promise<IConversation> {
    const { userId, cardId, userInput } = requestBody;
    return this.conversationService.createConversation(userId, cardId, userInput);
  }
}
