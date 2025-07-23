import { Module } from '@nestjs/common';
import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';
import { PrismaModule } from '../prisma/prisma.module'; // 👈 importa el módulo de Prisma

@Module({
  imports: [PrismaModule], // 👈 agrégalo aquí
  controllers: [SorteoController],
  providers: [SorteoService],
})
export class SorteoModule {}
