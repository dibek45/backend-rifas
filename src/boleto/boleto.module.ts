  import { forwardRef, Module } from '@nestjs/common';
  import { TypeOrmModule } from '@nestjs/typeorm';
  import { Boleto } from './entities/boleto.entity';
  import { Sorteo } from '../sorteo/entities/sorteo.entity';
  import { Comprador } from '../comprador/entities/comprador.entity';
  import { BoletoService } from './boleto.service';
  import { BoletoController } from './boleto.controller';
  import { SorteoGateway } from 'src/sockets/boletos.gateway';
  import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
  import { SorteoModule } from 'src/sorteo/sorteo.module';

  @Module({
    
    controllers: [BoletoController],
  imports: [
    TypeOrmModule.forFeature([Boleto, Comprador, Sorteo, Vendedor]), // ✅ ok
    forwardRef(() => SorteoModule),  // 👈 rompe la dependencia circular
  ],
  providers: [BoletoService, SorteoGateway], // ✅ quitaste Vendedor de aquí
    exports: [BoletoService],
  })

  export class BoletoModule {}