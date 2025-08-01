import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE_RFS',
        transport: Transport.TCP,
        options: {
          host: process.env.AUTH_SERVICE_HOST || 'authr-auth-r', // o 'auth-r' si así se llama el contenedor
          port: parseInt(process.env.AUTH_SERVICE_PORT ?? '4003', 10),
        },
      },
    ]),
  ],
  controllers: [AuthController], // ✅ Este va aquí
  providers: [AuthService],       // ✅ Solo el service va aquí
})
export class AuthModule {}
