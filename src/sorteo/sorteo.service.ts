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

create(data: {
  nombre: string;
  descripcion?: string;
  imagen?: string;
  fecha: Date | string;
  cierreVentas?: Date | string;
}) {
  return this.prisma.sorteo.create({
    data: {
      nombre: data.nombre,
      descripcion: data.descripcion,
      imagen: data.imagen,
      fecha: new Date(data.fecha),
      cierreVentas: data.cierreVentas ? new Date(data.cierreVentas) : undefined,
    },
  });
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
