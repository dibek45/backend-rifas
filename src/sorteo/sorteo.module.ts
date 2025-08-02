import { Module } from '@nestjs/common';
import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';
import { BoletoService } from 'src/boleto/boleto.service';
import { BoletoModule } from 'src/boleto/boleto.module';
import { SorteoGateway } from 'src/sockets/boletos.gateway';

@Module({
  imports: [BoletoModule], // 👈 agrégalo aquí
  controllers: [SorteoController],
  providers: [SorteoService,SorteoGateway],
  exports:[SorteoGateway]
})
export class SorteoModule {}
