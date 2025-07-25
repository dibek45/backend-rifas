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

  async apartarBoletosEnLote(
    compradorId: number,
    boletos: { id: number }[]
  ) {
    const boletosFallidos: number[] = [];

    // Traer todos los boletos por ID
    const ids = boletos.map(b => b.id);
    const encontrados = await this.prisma.boleto.findMany({
      where: { id: { in: ids } },
    });

    // Filtrar los que ya están ocupados
    const yaOcupados = encontrados.filter(b => b.estado !== 'disponible');
    boletosFallidos.push(...yaOcupados.map(b => b.numero));

    // Filtrar los que sí se pueden apartar
    const disponibles = encontrados.filter(b => b.estado === 'disponible');

    if (disponibles.length > 0) {
      await this.prisma.$transaction(
        disponibles.map(b =>
          this.prisma.boleto.update({
            where: { id: b.id },
            data: {
              estado: 'ocupado',
              compradorId: compradorId,
            },
          })
        )
      );
    }

    return {
      success: true,
      boletosOcupados: boletosFallidos, // Devuelve los que fallaron
    };
  }


  async apartarLoteConComprador(
  nombre: string,
  telefono: string,
  boletos: { id: number }[]
) {
  const comprador = await this.prisma.comprador.create({
    data: {
      nombre,
      telefono,
      email: `${Date.now()}@fake.com`, // puedes generar un email real si tienes login
    },
  });

  return this.apartarBoletosEnLote(comprador.id, boletos);
}


async findBoletosPorNombreTelefonoYSorteo(
  nombre: string,
  telefono: string,
  sorteoId?: number
) {
  const whereBoletos = sorteoId ? { sorteoId } : {};

  console.log('🟡 Buscar comprador con:');
  console.log('Nombre:', nombre);
  console.log('Teléfono:', telefono);
  console.log('Filtro de boletos:', whereBoletos);

const comprador = await this.prisma.comprador.findFirst({
  where: {
    nombre: {
      mode: 'insensitive',
      equals: nombre,
    },
    telefono: {
      equals: telefono,
    },
    boletos: {
      some: whereBoletos,
    },
  },
  include: {
    boletos: {
      where: whereBoletos,
      include: {
        sorteo: true,
        vendedor: true,
      },
    },
  },
});

  console.log('🟢 Resultado comprador:', comprador);

  if (!comprador) {
    console.warn('❌ Comprador no encontrado');
    return {
      message: 'Comprador no encontrado',
      boletos: [],
    };
  }

  return {
    comprador: {
      id: comprador.id,
      nombre: comprador.nombre,
      telefono: comprador.telefono,
    },
    boletos: comprador.boletos,
  };
}


}
