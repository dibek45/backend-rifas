import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateSorteoDto {
  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsString()
  @IsOptional()
  imagen?: string;

  @IsDateString()
  fecha: string;

  @IsDateString()
  @IsOptional()
  fechaCierreVenta?: string;
}
