import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './servicio.entity';
import { CreateServicioDto, UpdateServicioDto } from './servicio.dto';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(Servicio) private readonly repo: Repository<Servicio>,
  ) {}

  async findByAdmin(adminId: number): Promise<Servicio[]> {
    return this.repo.find({
      where: { adminId, activo: true },
      order: { nombre: 'ASC' },
    });
  }

  async findOne(id: number): Promise<Servicio> {
    const s = await this.repo.findOne({ where: { id } });
    if (!s) throw new NotFoundException(`Servicio con id ${id} no encontrado`);
    return s;
  }

  async create(dto: CreateServicioDto): Promise<Servicio> {
    const s = this.repo.create(dto);
    return this.repo.save(s);
  }

  async update(id: number, dto: UpdateServicioDto): Promise<Servicio> {
    const s = await this.findOne(id);
    Object.assign(s, dto);
    return this.repo.save(s);
  }

  async remove(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
