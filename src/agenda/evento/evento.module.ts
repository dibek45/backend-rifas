// src/evento/evento.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';
import { EventoService } from './evento.service';
import { EventoController } from './evento.controller';
import { Cita } from '../cita/cita.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Evento, Cita])],
  providers: [EventoService],
  controllers: [EventoController],
  exports: [EventoService],
})
export class EventoModule {}
