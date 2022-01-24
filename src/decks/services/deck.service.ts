import { Injectable } from '@nestjs/common';
import { fromBuffer } from "pdf2pic";
import { DeckFileMimeTypes } from '../models/deck.model';

const decksPath = './decks'

@Injectable()
export class DeckService {
    async create(name: string, file: Express.Multer.File) {
        switch(file.mimetype) {
            case DeckFileMimeTypes.Pdf:
                await this.createImagesFromPdfType(name, file.buffer);
        }
    }

    private createImagesFromPdfType(name: string,buffer: Buffer) {
        return fromBuffer(buffer, {
            density: 100,
            savePath: `${decksPath}/name`,
            format: "jpg",
            width: 600,
            height: 600
        }).bulk(-1, false);
    }
}