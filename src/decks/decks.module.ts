import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { DecksController } from './controllers/decks.controller';
import { DeckService } from './services/deck.service';

@Module({
    imports: [
        MulterModule.register({
            storage: memoryStorage()
        })
    ],
    controllers: [DecksController],
    providers: [DeckService],
})
export class DecksModule {}