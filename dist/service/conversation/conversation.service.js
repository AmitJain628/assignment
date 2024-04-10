"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const conversation_schema_1 = require("../../schema/conversation.schema");
const openai_1 = require("openai");
const openai = new openai_1.default({ apiKey: process.env.OPEN_API_KEY || '' });
let ConversationService = class ConversationService {
    constructor(conversationModel, httpService) {
        this.conversationModel = conversationModel;
        this.httpService = httpService;
    }
    async createConversation(userId, cardId, userInput) {
        const botResponse = await this.generateBotResponse(userInput);
        const conversation = new this.conversationModel({ userId, cardId, userInput, botResponse });
        return conversation.save();
    }
    async generateBotResponse(userInput) {
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
        }
        catch (error) {
            console.error('Error generating bot response:', error);
            return 'I am experiencing technical difficulties. Please try again later.';
        }
    }
};
ConversationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(conversation_schema_1.Conversation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        common_1.HttpService])
], ConversationService);
exports.ConversationService = ConversationService;
//# sourceMappingURL=conversation.service.js.map