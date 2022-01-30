import { Body, Controller, Get, HttpCode, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { DeckCreatePayload, DeckGetAllPayload } from '../models/deck.model';
import { DeckService } from '../services/deck.service';

@ApiTags('decks')
@Controller('decks')
export class DecksController {
  constructor(private readonly deckService: DeckService) {}

    @Post()
    @HttpCode(200)
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('deckFile'))
    uploadFileForDeck(@Body() { name }: DeckCreatePayload,@UploadedFile() file: Express.Multer.File) {
        this.deckService.create(name, file);
        return {
            message: 'your file is processing'
        }
    }

    @Get()
    getAllDecks(@Query() params: DeckGetAllPayload) {
        return this.deckService.getAllDecks(params.name);
    }
    
}
