// src/conversation/conversation.service.ts

import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conversation, } from 'src/schema/conversation.schema';
import { IConversation } from 'src/interface/conversation.interface';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPEN_API_KEY || ''})

@Injectable()
export class ConversationService {
  constructor(
    @InjectModel(Conversation.name) private readonly conversationModel: Model<IConversation>,
    private readonly httpService: HttpService,
  ) {}

  async createConversation(userId: string, cardId: string, userInput: string): Promise<IConversation> {
    const botResponse =  await this.generateBotResponse(userInput);
    const conversation = new this.conversationModel({ userId, cardId, userInput, botResponse });
    return conversation.save();
  }

  private async generateBotResponse(userInput: string): Promise<any> {
    try {
        const completion = await openai.chat.completions.create({
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              { role: "user", content: userInput },
            ],
            model: "gpt-3.5-turbo-1106",
          });
      let response = completion.choices[0];
      console.log("---resop", response);
      return response;
    } catch (error) {
      console.error('Error generating bot response:', error);
      return 'I am experiencing technical difficulties. Please try again later.';
    }
  }
}
