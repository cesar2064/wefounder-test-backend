import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum DeckFileMimeTypes {
    Pdf = 'application/pdf'
}

export abstract class DeckCreatePayload {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
    @ApiProperty({ type:'string', format:'binary' })
    deckFile: Express.Multer.File;
}

export abstract class DeckGetAllPayload {
    @ApiProperty({
        required: false
    })
    @IsOptional()
    @IsString()
    name: string;
}