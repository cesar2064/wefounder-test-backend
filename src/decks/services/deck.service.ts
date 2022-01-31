import { Injectable } from '@nestjs/common';
import { fromBuffer } from "pdf2pic";
import { DeckFileMimeTypes } from '../models/deck.model';
import * as mkdirp from 'mkdirp';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as Bluebird from 'bluebird';

@Injectable()
export class DeckService {

    private readonly decksPath = this.configService.get('DECKS_PATH')

    constructor(private readonly configService: ConfigService) {
        mkdirp(this.decksPath);
    }

    async create(name: string, file: Express.Multer.File) {
        try {
            switch(file.mimetype) {
                case DeckFileMimeTypes.Pdf:
                    await this.createImagesFromPdfType(name, file.buffer);
            }
        } catch(e) {
            console.error(e);
        }
    }

    async getAllDecks(filter: string = '') {
        const decksFromFileSystem = fs.readdirSync(this.decksPath, { withFileTypes: true });
        const results = await Bluebird.map(decksFromFileSystem.filter((deck)=> deck.isDirectory && deck.name.match(filter)), async (deck)=> {
            const files = await new Bluebird((resolve, reject)=> {
                fs.readdir(`${this.decksPath}/${deck.name}`, (err, files)=> {
                    if (err) return reject(err);
                    resolve(files);
                });
            })
            return {
                name: deck.name,
                files
            }
        })
        return results.sort((deck1, deck2)=> {
            if (deck1.name < deck2.name) {
                return -1;
            }
            if (deck1.name > deck2.name) {
                return 1;
            }
            return 0;
        });
    }

    private createImagesFromPdfType(name: string,buffer: Buffer) {
        const dir = `${this.configService.get('DECKS_PATH')}/${name}`;
        mkdirp.sync(dir);
        return fromBuffer(buffer, {
            density: 100,
            savePath: dir,
            format: "jpg",
            width: 600,
            height: 600
        }).bulk(-1, false);
    }
}