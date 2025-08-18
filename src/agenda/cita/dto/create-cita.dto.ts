// src/cita/dto/create-cita.dto.ts
import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateCitaDto {
  @IsString()
  @IsNotEmpty()
  nombreCliente: string;

  @IsString()
  @IsNotEmpty()
  telefonoCliente: string;

  @IsDateString()
  horario: string;

  @IsString()
  @IsNotEmpty()
  eventoId: number; // relación con evento
}
