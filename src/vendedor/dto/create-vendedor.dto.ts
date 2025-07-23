import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateVendedorDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  rol?: string; // valores válidos: "vendedor" o "admin"
}
