"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const cards_controller_1 = require("../controller/cards/cards.controller");
const cards_service_1 = require("../service/cards/cards.service");
const card_schema_1 = require("../schema/card.schema");
let CardsModule = class CardsModule {
};
CardsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: card_schema_1.Card.name, schema: card_schema_1.CardSchema }]),
        ],
        controllers: [cards_controller_1.CardsController],
        providers: [cards_service_1.CardsService],
    })
], CardsModule);
exports.CardsModule = CardsModule;
//# sourceMappingURL=card.module.js.map