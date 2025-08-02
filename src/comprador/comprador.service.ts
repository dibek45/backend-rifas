import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comprador } from './entities/comprador.entity';
import { CreateCompradorDto } from './dto/create-comprador.dto';
import { UpdateCompradorDto } from './dto/update-comprador.dto';

@Injectable()
export class CompradorService {
  constructor(
    @InjectRepository(Comprador)
    private readonly compradorRepository: Repository<Comprador>,
  ) {}

  async create(data: CreateCompradorDto) {
    const comprador = this.compradorRepository.create(data);
    return this.compradorRepository.save(comprador);
  }

  async findAll() {
    return this.compradorRepository.find({
      relations: ['boletos'], // incluye los boletos relacionados
    });
  }

  async findOne(id: number) {
    const comprador = await this.compradorRepository.findOne({
      where: { id },
      relations: ['boletos'],
    });
    if (!comprador) throw new NotFoundException('Comprador no encontrado');
    return comprador;
  }

  async update(id: number, data: UpdateCompradorDto) {
    await this.compradorRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.compradorRepository.delete(id);
  }
}
