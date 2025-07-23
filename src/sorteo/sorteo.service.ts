import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { UpdateSorteoDto } from './dto/update-sorteo.dto';

@Injectable()
export class SorteoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.sorteo.findMany({
      include: { boletos: true },
    });
  }

  findOne(id: number) {
    return this.prisma.sorteo.findUnique({
      where: { id },
      include: { boletos: true },
    });
  }

  create(data: Prisma.SorteoCreateInput) {
    console.log(data); // Asegúrate de ver los campos

    return this.prisma.sorteo.create({ data });
  }



async update(id: number, data: UpdateSorteoDto) {
  return this.prisma.sorteo.update({
    where: { id },
    data,
  });
}


  delete(id: number) {
    return this.prisma.sorteo.delete({ where: { id } });
  }
}
