import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DeckCreatePayload } from '../models/deck.model';
import { DeckService } from '../services/deck.service';

@Controller('decks')
export class DecksController {
  constructor(private readonly deckService: DeckService) {}

    @Post()
    @UseInterceptors(FileInterceptor('deckFile'))
    uploadFileForDeck(@Body() { name }: DeckCreatePayload,@UploadedFile() file: Express.Multer.File) {
        this.deckService.create(name, file);
        return {
            message: 'your file is processing'
        }
    }
}
