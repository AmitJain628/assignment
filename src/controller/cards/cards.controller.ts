// cards.controller.ts
import { Controller, Get, Query, ParseIntPipe, Post, Body } from '@nestjs/common';
import { CardsService } from 'src/service/cards/cards.service';
import {  ICard } from 'src/interface/card.interface';
import {CardDto} from 'src/dto/card.dto'

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  async findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('tags') tags?: string): Promise<ICard[]> {
        const tagsArray = tags ? tags.split(',') : [];
        const cards = await this.cardsService.findAll(page, limit, tagsArray);
        return cards;
  }

  @Post()
  async create(@Body() cardDto: CardDto): Promise<ICard> {
    const createdCard = await this.cardsService.create(cardDto);
    return createdCard;
  }
}
