import { Injectable } from '@nestjs/common';
import { Superhero } from './entities/superhero.entity';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Injectable()
export class SuperheroesService {
    private superheroes: Superhero[] = [];
    private idCounter = 1;

    addSuperhero(dto: CreateSuperheroDto) {
        const hero = new Superhero(this.idCounter++, dto.name, dto.superpower, dto.humilityScore);
        this.superheroes.push(hero);
        return hero;
    }

    getSuperheroes() {
        return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    }
}
