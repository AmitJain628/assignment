/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
export declare type ConversationDocument = Conversation & Document;
export declare class Conversation {
    userId: string;
    cardId: string;
    userInput: string;
    botResponse: string;
    timestamp: Date;
}
export declare const ConversationSchema: import("mongoose").Schema<Document<Conversation, any, any>, import("mongoose").Model<Document<Conversation, any, any>, any, any, any>, {}, {}>;
