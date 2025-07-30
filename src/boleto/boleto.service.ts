import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { SorteoGateway } from 'src/sockets/boletos.gateway'; // asegúrate que esté bien importado

@Injectable()
export class BoletoService {
  constructor(private prisma: PrismaService,    private readonly sorteoGateway: SorteoGateway, // inyecta el gateway
) {}

 async findAll(sorteoId: number) {
  return this.prisma.boleto.findMany({
    where: {
      sorteoId, // 👈 Filtra por sorteo
    },
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
async update(id: number, data: UpdateBoletoDto) {
  const actual = await this.prisma.boleto.findUnique({
    where: { id },
    include: {
      comprador: true,
      vendedor: true,
      sorteo: true,
    },
  });

  if (!actual) throw new Error('❌ Boleto no encontrado');

  // 🧠 Verifica si los datos son iguales (solo campos que cambian normalmente)
  const noCambio =
    actual.estado === data.estado &&
    actual.metodoPago === data.metodoPago &&
    actual.precio === data.precio &&
    actual.compradorId === data.compradorId &&
    actual.vendedorId === data.vendedorId;

  if (noCambio) {
    console.log('🔁 Boleto sin cambios reales, no se actualiza ni emite socket');
    return actual;
  }

  // ✅ Si sí cambió, actualiza y emite
  const updatedBoleto = await this.prisma.boleto.update({
    where: { id },
    data: {
      ...data,
      fechaCompra: data.fechaCompra ? new Date(data.fechaCompra) : undefined,
    },
    include: {
      comprador: true,
      vendedor: true,
      sorteo: true,
    },
  });

  this.sorteoGateway.emitBoletoActualizado(updatedBoleto);
  return updatedBoleto;
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

  const ids = boletos.map(b => b.id);
  const encontrados = await this.prisma.boleto.findMany({
    where: { id: { in: ids } },
  });

  const yaOcupados = encontrados.filter(b => b.estado !== 'disponible');
  boletosFallidos.push(...yaOcupados.map(b => b.numero));

  const disponibles = encontrados.filter(b => b.estado === 'disponible');

  let actualizados: any[] = [];

  if (disponibles.length > 0) {
    actualizados = await this.prisma.$transaction(
      disponibles.map(b =>
        this.prisma.boleto.update({
          where: { id: b.id },
          data: {
            estado: 'ocupado',
            compradorId: compradorId,
          },
          include: {
            sorteo: true,
            comprador: true,
            vendedor: true,
          },
        })
      )
    );

    // Emitir cada boleto actualizado por socket
    for (const boleto of actualizados) {
      this.sorteoGateway.emitBoletoActualizado(boleto);
    }
  }

  return {
    success: true,
    boletosOcupados: boletosFallidos,
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
      email: `${Date.now()}@fake.com`,
    },
  });

  const boletosFallidos: number[] = [];

  const ids = boletos.map(b => b.id);
  const encontrados = await this.prisma.boleto.findMany({
    where: { id: { in: ids } },
  });

  const yaOcupados = encontrados.filter(b => b.estado !== 'disponible');
  boletosFallidos.push(...yaOcupados.map(b => b.numero));

  const disponibles = encontrados.filter(b => b.estado === 'disponible');

  if (disponibles.length > 0) {
    const actualizados = await this.prisma.$transaction(
      disponibles.map(b =>
        this.prisma.boleto.update({
          where: { id: b.id },
          data: {
            estado: 'ocupado',
            compradorId: comprador.id,
          },
          include: { sorteo: true, comprador: true, vendedor: true },
        })
      )
    );

    // 🔥 Emitimos cada boleto actualizado
    actualizados.forEach(boleto => {
      this.sorteoGateway.emitBoletoActualizado(boleto);
    });
  }

  return {
    success: true,
    boletosOcupados: boletosFallidos,
  };
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

  // 👇 Esta es la parte clave: solo agregamos "boletos: some" si hay sorteoId
  const whereComprador: any = {
    nombre: {
      mode: 'insensitive',
      equals: nombre,
    },
    telefono: {
      equals: telefono,
    },
  };

  if (sorteoId) {
    whereComprador.boletos = {
      some: { sorteoId },
    };
  }

  const comprador = await this.prisma.comprador.findFirst({
    where: whereComprador,
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


async getBoletosPorClienteSinSorteo(nombre: string, telefono: string) {
  console.log('🟡 Buscar TODOS los boletos (sin sorteoId) para:');
  console.log('Nombre:', nombre);
  console.log('Teléfono:', telefono);

  const comprador = await this.prisma.comprador.findFirst({
    where: {
      nombre: {
        equals: nombre,
        mode: 'insensitive',
      },
      telefono,
    },
    include: {
      boletos: {
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
