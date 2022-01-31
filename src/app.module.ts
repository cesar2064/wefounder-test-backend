import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});

import { DecksModule } from './decks/decks.module';

@Module({
  imports: [
    configModule,
    DecksModule, 
    ServeStaticModule.forRoot({
      rootPath: process.env.DECKS_PATH,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
