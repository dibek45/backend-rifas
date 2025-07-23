import { Module } from '@nestjs/common';
import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';
import { PrismaModule } from '../prisma/prisma.module'; // 👈 importa el módulo de Prisma
import { BoletoService } from 'src/boleto/boleto.service';
import { BoletoModule } from 'src/boleto/boleto.module';

@Module({
  imports: [PrismaModule,BoletoModule], // 👈 agrégalo aquí
  controllers: [SorteoController],
  providers: [SorteoService],
})
export class SorteoModule {}
