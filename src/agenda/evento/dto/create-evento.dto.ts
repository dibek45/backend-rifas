// src/evento/dto/create-evento.dto.ts
import { IsDateString, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

export class CreateEventoDto {
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  fecha: string;

  @IsInt()
  duracion: number;
}
