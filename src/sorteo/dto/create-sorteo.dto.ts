import { IsDateString, IsOptional, IsString, IsInt, Min } from 'class-validator';

export class CreateSorteoDto {
  @IsString()
  nombre: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  imagen?: string;

  @IsDateString()
  fecha: string;

  @IsOptional()
  @IsDateString()
  cierreVentas?: string;

  @IsInt()
  @Min(1)
  cantidadBoletos: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  precioBoletos?: number;
}
