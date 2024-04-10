// card.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CardDocument = Card & Document;

@Schema()
export class Card {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  setting: string;

  @Prop([String])
  tags: string[];
}

export const CardSchema = SchemaFactory.createForClass(Card);
