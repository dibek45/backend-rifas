import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
} from 'class-validator';

export class CreateBoletoDto {
  @IsInt()
  numero: number;

  @IsNumber()
  precio: number;

  @IsOptional()
  @IsString()
  estado?: string; // disponible | vendido | cancelado

  @IsOptional()
  @IsString()
  metodoPago?: string;

  @IsOptional()
  @IsDateString()
  fechaCompra?: string; // formato ISO, ej: '2025-07-23T12:00:00Z'

  @IsOptional()
  @IsInt()
  compradorId?: number;

  @IsOptional()
  @IsInt()
  vendedorId?: number;

  @IsInt()
  sorteoId: number;
}
