import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { BoletoModule } from './boleto/boleto.module';
import { SorteoModule } from './sorteo/sorteo.module';
import { CompradorModule } from './comprador/comprador.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './user/entities/user.entity';
import { Sorteo } from './sorteo/entities/sorteo.entity';
import { Vendedor } from './vendedor/entities/vendedor.entity';
import { Comprador } from './comprador/entities/comprador.entity';
import { Boleto } from './boleto/entities/boleto.entity';
import { CuentaBancaria } from './vendedor/entities/cuenta-bancaria.entity';
import { AdminModule } from './agenda/admin-agenda/admin.module';
import { EventoModule } from './agenda/evento/evento.module';
import { CitaModule } from './agenda/cita/cita.module';
import { Cita } from './agenda/cita/cita.entity';
import { Evento } from './agenda/evento/entities/evento.entity';
import { Admin } from './agenda/admin-agenda/entities/admin.entity';


@Module({
  imports: [
    UserModule,
    BoletoModule,
    SorteoModule,
    CompradorModule,
    VendedorModule,
      AdminModule,
  EventoModule,
  CitaModule,
   AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',  // Asegúrate de usar PostgreSQL
      url: process.env.DATABASE_URL,  // Usamos la URL de conexión desde las variables de entorno
      entities: [Usuario, Sorteo, Comprador, Vendedor, Boleto, CuentaBancaria,
         Admin,
      Evento,
      Cita],  // Agregamos todas las entidades
      synchronize: false,  // Ten cuidado con esta opción en producción
      autoLoadEntities: false,  // 🔥 Deja que Nest cargue automáticamente tus entidades

    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
