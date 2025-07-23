import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCompradorDto } from './dto/create-comprador.dto';
import { UpdateCompradorDto } from './dto/update-comprador.dto';

@Injectable()
export class CompradorService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateCompradorDto) {
    return this.prisma.comprador.create({ data });
  }

  findAll() {
    return this.prisma.comprador.findMany({
      include: { boletos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.comprador.findUnique({
      where: { id },
      include: { boletos: true },
    });
  }

  update(id: number, data: UpdateCompradorDto) {
    return this.prisma.comprador.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.comprador.delete({
      where: { id },
    });
  }
}
