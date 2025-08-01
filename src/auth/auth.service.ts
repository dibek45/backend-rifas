import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE_RFS') private readonly authClient: ClientProxy) {}

  async login(email: string, password: string) {
    console.log('📤 Enviando mensaje a auth-service2...', { email, password });

    try {

      const response = await firstValueFrom(this.authClient.send('auth.login', { email, password }));
      
      console.log('📥 Respuesta recibida desde auth-service2:', response);
      return response;
    } catch (error) {
      console.error('❌ Error al conectar con auth-service2:', error);
      throw error;
    }
  }


 
}
