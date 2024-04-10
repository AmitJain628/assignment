// cards.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card, CardDocument } from 'src/schema/card.schema';
import {CardDto} from 'src/dto/card.dto'
import { ICard } from 'src/interface/card.interface'

@Injectable()
export class CardsService {
  constructor(@InjectModel(Card.name) private readonly cardModel: Model<ICard>) {}

  async findAll(page: number = 1, limit: number = 10, tags: string[] = []): Promise<ICard[]> {
    let query = {};
    if (tags.length > 0) {
      query = { tags: { $all: tags } };
    }

    const skip = (page - 1) * limit;

    return this.cardModel.find(query).skip(skip).limit(limit).exec();
  }

  async create(cardDto: CardDto): Promise<ICard> {
    console.log("card d", cardDto);
    const createdCard = await new this.cardModel(cardDto);
    console.log("card service", createdCard);
    return createdCard.save();
  }
}
