import { IsEmail, IsString } from 'class-validator';

export class CreateCompradorDto {
  @IsString()
  nombre: string;

  @IsEmail()
  email: string;
}
