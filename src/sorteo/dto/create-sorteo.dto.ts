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
  estado?: string;

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
  numeroWhatsApp?: string;

  @IsOptional()
  @IsString()
  nombreEmpresa?: string;

  @IsOptional()
  @IsString()
  linkfacebook?: string;

  @IsOptional()
  @IsString()
  numeroCuenta?: string;

  @IsOptional()
  @IsString()
  tipoBanco?: string;

  // 🔥 NUEVOS CAMPOS para mensajes de WhatsApp y número de sorteo
  @IsOptional()
  @IsString()
  mensajeWhatsappInfo?: string;

  @IsOptional()
  @IsString()
  mensajeWhatsappApartado?: string;

  @IsOptional()
  @IsString()
  mensajeWhatsappConfirmado?: string;

  @IsOptional()
  @IsString()
  mensajeWhatsappAnuncio?: string;

  @IsOptional()
  @IsString()
  numeroDeSorteo?: string;

  @IsInt()
adminId: number;

@IsOptional()
@IsInt()
cuentaBancariaId?: number;

//@IsString()
//dominio: string;

}
