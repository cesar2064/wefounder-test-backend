import { Module } from '@nestjs/common';
import { DecksModule } from './decks/decks.module';

@Module({
  imports: [DecksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
