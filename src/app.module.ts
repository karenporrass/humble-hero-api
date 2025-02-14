import { Module } from '@nestjs/common';
import { SuperHeroModule } from './superheroes/superheroes.module';

@Module({
  imports: [SuperHeroModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
