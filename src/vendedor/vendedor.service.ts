import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateVendedorDto) {
    return this.prisma.vendedor.create({
      data,
    });
  }

  findAll() {
    return this.prisma.vendedor.findMany({
      include: {
        boletos: true, // para ver los boletos que ha vendido
      },
    });
  }

  findOne(id: number) {
    return this.prisma.vendedor.findUnique({
      where: { id },
      include: {
        boletos: true,
      },
    });
  }

  update(id: number, data: UpdateVendedorDto) {
    return this.prisma.vendedor.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.vendedor.delete({
      where: { id },
    });
  }
}
