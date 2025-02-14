import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class CreateSuperheroDto {
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    name: string;

    @IsNotEmpty({ message: 'El superpoder no puede estar vacío' })
    superpower: string;

    @IsInt({ message: 'El humilityScore debe ser un número entero' })
    @Min(1, { message: 'El humilityScore debe ser al menos 1' })
    @Max(10, { message: 'El humilityScore no puede ser mayor a 10' })
    humilityScore: number;
}
