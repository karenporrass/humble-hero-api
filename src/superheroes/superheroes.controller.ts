import { Controller, Post, Get, Body } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroesController {
    constructor(private readonly superheroesService: SuperheroesService) { }

    @Post()
    addSuperhero(@Body() dto: CreateSuperheroDto) {
        return this.superheroesService.addSuperhero(dto);
    }

    @Get()
    getSuperheroes() {
        return this.superheroesService.getSuperheroes();
    }
}
