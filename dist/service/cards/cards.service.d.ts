import { Model } from 'mongoose';
import { CardDto } from 'src/dto/card.dto';
import { ICard } from 'src/interface/card.interface';
export declare class CardsService {
    private readonly cardModel;
    constructor(cardModel: Model<ICard>);
    findAll(page?: number, limit?: number, tags?: string[]): Promise<ICard[]>;
    create(cardDto: CardDto): Promise<ICard>;
}
