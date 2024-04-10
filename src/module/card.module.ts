// cards.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsController } from 'src/controller/cards/cards.controller';
import { CardsService } from 'src/service/cards/cards.service';
import { Card, CardSchema } from 'src/schema/card.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardsService],
})
export class CardsModule {}
