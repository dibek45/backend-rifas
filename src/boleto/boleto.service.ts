import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';

@Injectable()
export class BoletoService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.boleto.findMany({
      include: {
        comprador: true,
        vendedor: true,
        sorteo: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.boleto.findUnique({
      where: { id },
      include: {
        comprador: true,
        vendedor: true,
        sorteo: true,
      },
    });
  }

  create(data: CreateBoletoDto) {
    return this.prisma.boleto.create({
      data: {
        numero: data.numero,
        precio: data.precio,
        estado: data.estado ?? 'disponible',
        metodoPago: data.metodoPago ?? null,
        fechaCompra: data.fechaCompra ? new Date(data.fechaCompra) : undefined,
        sorteoId: data.sorteoId,
        compradorId: data.compradorId ?? null,
        vendedorId: data.vendedorId ?? null,
      },
    });
  }

  update(id: number, data: UpdateBoletoDto) {
    return this.prisma.boleto.update({
      where: { id },
      data: {
        ...data,
        fechaCompra: data.fechaCompra ? new Date(data.fechaCompra) : undefined,
      },
    });
  }

  delete(id: number) {
    return this.prisma.boleto.delete({
      where: { id },
    });
  }



   async generarBoletosParaSorteo(sorteoId: number, cantidad: number, precio = 100) {
    const boletos = Array.from({ length: cantidad }, (_, i) => ({
      numero: i + 1,
      precio,
      estado: 'disponible',
      sorteoId,
    }));

    return this.prisma.boleto.createMany({
      data: boletos,
    });
  }
}
