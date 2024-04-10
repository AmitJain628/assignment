// src/conversation/conversation.module.ts

import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Conversation, ConversationSchema } from 'src/schema/conversation.schema';
import { ConversationController } from 'src/controller/conversation/conversation.controller';
import { ConversationService } from 'src/service/conversation/conversation.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Conversation.name, schema: ConversationSchema }]),
    HttpModule
  ],
  controllers: [ConversationController],
  providers: [ConversationService],
})
export class ConversationModule {}
