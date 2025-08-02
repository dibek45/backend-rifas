import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // 👈 necesitas esto
import { BoletoService } from './boleto.service';
import { BoletoController } from './boleto.controller';
import { SorteoGateway } from 'src/sockets/boletos.gateway';
import { Boleto } from './entities/boleto.entity';
import { Comprador } from '../comprador/entities/comprador.entity';
import { Sorteo } from '../sorteo/entities/sorteo.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Boleto, Comprador, Sorteo]), // ✅ CORRECTO
  ],
  controllers: [BoletoController],
  providers: [BoletoService, SorteoGateway],
  exports: [BoletoService],
})
export class BoletoModule {}
