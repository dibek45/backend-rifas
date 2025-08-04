// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth') // 👈 endpoint base: /auth
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') // 👈 POST /auth/login
  async login(@Body('email') email: string, @Body('password') password: string) {
    console.log('📤 Enviando login al microservicio auth-service2...', { email, password });
    return await this.authService.login(email, password);
  }

 @Post('crear-usuario')
  async crearUsuario(@Body() dto: CreateUserDto) {
    return this.authService.crearUsuario(dto);
  }
}
