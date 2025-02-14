import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

describe('SuperheroesService', () => {
    let service: SuperheroesService;

    beforeEach(() => {
        service = new SuperheroesService();
    });

    it('debería agregar un superhéroe correctamente', () => {
        const dto: CreateSuperheroDto = { name: 'Batman', superpower: 'Detective', humilityScore: 8 };
        const hero = service.addSuperhero(dto);

        expect(hero).toHaveProperty('id', expect.any(Number));
        expect(hero.name).toBe(dto.name);
        expect(hero.superpower).toBe(dto.superpower);
        expect(hero.humilityScore).toBe(dto.humilityScore);
        expect(service.getSuperheroes()).toHaveLength(1);
    });

    it('debería listar superhéroes ordenados por humildad de mayor a menor', () => {
        service.addSuperhero({ name: 'Superman', superpower: 'Fuerza', humilityScore: 7 });
        service.addSuperhero({ name: 'Spider-Man', superpower: 'Agilidad', humilityScore: 9 });
        service.addSuperhero({ name: 'Iron Man', superpower: 'Tecnología', humilityScore: 7 });

        const heroes = service.getSuperheroes();

        expect(heroes).toHaveLength(3);
        expect(heroes[0].name).toBe('Spider-Man');
        expect(heroes[1].humilityScore).toBe(7);
        expect(heroes[2].humilityScore).toBe(7);

        expect(heroes.map(h => h.name)).toEqual(['Spider-Man', 'Superman', 'Iron Man']);
    });

    it('debería asignar IDs únicos a cada superhéroe', () => {
        const hero1 = service.addSuperhero({ name: 'Batman', superpower: 'Detective', humilityScore: 8 });
        const hero2 = service.addSuperhero({ name: 'Flash', superpower: 'Velocidad', humilityScore: 9 });

        expect(hero1.id).not.toBe(hero2.id);
    });
});
