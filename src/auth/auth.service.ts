import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE_RFS') private readonly authClient: ClientProxy) {}

  async login(email: string, password: string) {
    console.log('📤 Enviando mensaje a authr...', { email, password });

    try {

      const response = await firstValueFrom(this.authClient.send('auth.login', { email, password }));
      
      console.log('📥 Respuesta recibida desde auth-service2:', response);
      return response;
    } catch (error) {
      console.error('❌ Error al conectar con auth-service2:', error);
      throw error;
    }
  }


async crearUsuario(dto: CreateUserDto) {
  console.log('📡 Enviando al microservicio:', dto);
  return firstValueFrom(this.authClient.send('auth.create-dog', dto));
}




async testNuevo(nombre: string) {
  return firstValueFrom(this.authClient.send('auth.test-nuevo', { nombre }));
}

}
