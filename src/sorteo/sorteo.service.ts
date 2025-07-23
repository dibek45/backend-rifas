import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '../../generated/prisma';
import { UpdateSorteoDto } from './dto/update-sorteo.dto';
import { BoletoService } from 'src/boleto/boleto.service';
import { CreateSorteoDto } from './dto/create-sorteo.dto';

@Injectable()
export class SorteoService {
  constructor(private prisma: PrismaService,     private boletoService: BoletoService, // <-- inyectado
) {}

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

async create(dto: CreateSorteoDto) {
  const sorteo = await this.prisma.sorteo.create({
    data: {
      nombre: dto.nombre,
      descripcion: dto.descripcion,
      imagen: dto.imagen,
      fecha: new Date(dto.fecha),
      cierreVentas: dto.cierreVentas ? new Date(dto.cierreVentas) : undefined,
    },
  });

  await this.boletoService.generarBoletosParaSorteo(
    sorteo.id,
    dto.cantidadBoletos,
    dto.precioBoletos ?? 100,
  );

  return sorteo;
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
