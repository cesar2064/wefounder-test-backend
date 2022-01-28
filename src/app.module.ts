import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DecksModule } from './decks/decks.module';

const configModule = ConfigModule.forRoot({
  isGlobal: true,
});
@Module({
  imports: [DecksModule, 
    configModule,
    ServeStaticModule.forRoot({
      rootPath: process.env.DECKS_PATH,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
