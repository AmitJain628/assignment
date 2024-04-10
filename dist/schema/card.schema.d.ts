/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type CardDocument = Card & Document;
export declare class Card {
    name: string;
    description: string;
    image: string;
    setting: string;
    tags: string[];
}
export declare const CardSchema: import("mongoose").Schema<Document<Card, any, any>, import("mongoose").Model<Document<Card, any, any>, any, any, any>, {}, {}>;
