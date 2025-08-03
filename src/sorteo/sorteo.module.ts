import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sorteo } from './entities/sorteo.entity'; // ✅ entidad
import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';
import { BoletoModule } from 'src/boleto/boleto.module';
import { SorteoGateway } from 'src/sockets/boletos.gateway';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sorteo]), // ✅ esto es lo que faltaba
    BoletoModule,
  ],
  controllers: [SorteoController],
  providers: [SorteoService, SorteoGateway],
  exports: [SorteoGateway],
})
export class SorteoModule {}
