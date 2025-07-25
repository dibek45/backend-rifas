import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateCompradorDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  telefono?: string;
}

