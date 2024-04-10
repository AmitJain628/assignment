import { CardsService } from 'src/service/cards/cards.service';
import { ICard } from 'src/interface/card.interface';
import { CardDto } from 'src/dto/card.dto';
export declare class CardsController {
    private readonly cardsService;
    constructor(cardsService: CardsService);
    findAll(page: number, limit: number, tags?: string): Promise<ICard[]>;
    create(cardDto: CardDto): Promise<ICard>;
}
