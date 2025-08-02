import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from './entities/vendedor.entity';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  async create(data: CreateVendedorDto) {
    const vendedor = this.vendedorRepository.create(data);
    return this.vendedorRepository.save(vendedor);
  }

  async findAll() {
    return this.vendedorRepository.find({
      relations: ['boletos'], // incluir boletos vendidos
    });
  }

  async findOne(id: number) {
    const vendedor = await this.vendedorRepository.findOne({
      where: { id },
      relations: ['boletos'],
    });
    if (!vendedor) throw new NotFoundException('Vendedor no encontrado');
    return vendedor;
  }

  async update(id: number, data: UpdateVendedorDto) {
    await this.vendedorRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.vendedorRepository.delete(id);
  }
}
