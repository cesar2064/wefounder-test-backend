import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { DecksController } from './controllers/decks.controller';
import { DeckService } from './services/deck.service';

@Module({
    imports: [
        MulterModule.register({
            dest: process.env.TEMP_PATH
        })
    ],
    controllers: [DecksController],
    providers: [DeckService],
})
export class DecksModule {}