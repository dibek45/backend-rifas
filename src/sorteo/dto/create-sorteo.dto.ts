import { IsString, IsDateString, IsOptional } from 'class-validator';

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
  cierreVentas?: string; // 👈 Este nombre debe coincidir con el modelo de Prisma
}
