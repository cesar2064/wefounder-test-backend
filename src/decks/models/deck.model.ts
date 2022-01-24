import { IsNotEmpty, IsString } from "class-validator";

export enum DeckFileMimeTypes {
    Pdf = 'application/pdf'
}

export abstract class DeckCreatePayload {
    @IsString()
    @IsNotEmpty()
    name: string;
}