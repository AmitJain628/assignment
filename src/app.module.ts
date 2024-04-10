import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/module/user.module';
import { AuthModule } from 'src/module/auth.module';
import { CardsModule } from 'src/module/card.module';
import { ConversationModule } from 'src/module/conversation.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
            ConfigModule.forRoot(),
            MongooseModule.forRoot('mongodb+srv://amitjain061193:mrcbcxOvGKNP61fQ@cluster0.k030bkp.mongodb.net/',{dbName: 'companion'}), 
            UsersModule, 
            AuthModule, 
            CardsModule, 
            HttpModule,
            ConversationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
