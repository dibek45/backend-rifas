import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateServicioDto {
  @IsInt()
  adminId: number;

  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  @Min(1)
  duracionMin: number;

  @IsOptional()
  @IsInt()
  precioCents?: number;

  @IsOptional()
  @IsString()
  color?: string;
}

export class UpdateServicioDto {
  @IsOptional()
  @IsString()
  nombre?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  duracionMin?: number;

  @IsOptional()
  @IsInt()
  precioCents?: number;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
