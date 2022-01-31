import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum DeckFileMimeTypes {
    Pdf = 'application/pdf',
    Ppt = 'application/vnd.ms-powerpoint',
    Pptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
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