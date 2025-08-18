// src/evento/dto/create-evento.dto.ts
import { IsDateString, IsNotEmpty, IsOptional, IsString, IsInt, IsNumber } from 'class-validator';

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

    // 👇 Este campo es clave
  @IsNotEmpty()
  @IsNumber()
  adminId: number;
}
