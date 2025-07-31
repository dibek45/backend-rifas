import {
  IsDateString,
  IsOptional,
  IsString,
  IsInt,
  Min,
} from 'class-validator';

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

  @IsOptional()
  @IsInt()
  @Min(0)
  boletosVendidos?: number;

  @IsOptional()
  @IsString()
  estado?: string; // Ej: 'activo', 'cerrado', 'finalizado'


  @IsOptional()
  @IsInt()
  @Min(1)
  costoBoleto?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  totalBoletos?: number;


  @IsOptional()
@IsString()
numeroWhatsApp?: string; // Ej: '5216146087479'


  @IsOptional()
  @IsString()
  nombreEmpresa?: string; // 🏢 Nombre de empresa

  @IsOptional()
  @IsString()
  linkfacebook?: string; // 📘 Enlace a Facebook
}
