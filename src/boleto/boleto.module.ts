import { Module } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { BoletoController } from './boleto.controller';
import { SorteoGateway } from 'src/sockets/boletos.gateway';

@Module({
    imports: [], // 👈 agrégalo aquí
    exports: [BoletoService], // 👈 esto es CLAVE

  controllers: [BoletoController],
  providers: [BoletoService,SorteoGateway],
})
export class BoletoModule {}
