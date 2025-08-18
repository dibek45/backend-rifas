// src/agenda/evento/evento.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { Admin } from 'src/agenda/admin-agenda/entities/admin.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  findAllByAdmin(adminId: number) {
    return this.eventoRepository.find({
      where: { admin: { id: adminId } },
      relations: ['citas', 'admin'],
    });
  }

  findOne(id: number) {
    return this.eventoRepository.findOne({
      where: { id },
      relations: ['citas', 'admin'],
    });
  }

  async create(dto: CreateEventoDto) {
    const evento = this.eventoRepository.create({
      titulo: dto.titulo,
      descripcion: dto.descripcion,
      fecha: new Date(dto.fecha),
      duracion: dto.duracion,
      admin: { id: dto.adminId } as Admin,
    });

    return this.eventoRepository.save(evento);
  }

  async update(id: number, data: UpdateEventoDto) {
    await this.eventoRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    return this.eventoRepository.delete(id);
  }
}
