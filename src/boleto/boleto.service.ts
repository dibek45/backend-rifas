import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In, DeepPartial } from 'typeorm';

import { Boleto } from './entities/boleto.entity';
import { Comprador } from 'src/comprador/entities/comprador.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';
import { Sorteo } from 'src/sorteo/entities/sorteo.entity';

import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';

import { SorteoGateway } from 'src/sockets/boletos.gateway';

@Injectable()
export class BoletoService {
  
  constructor(
  @InjectRepository(Boleto) private boletoRepo: Repository<Boleto>,
  @InjectRepository(Comprador) private compradorRepo: Repository<Comprador>,
  @InjectRepository(Sorteo) private sorteoRepo: Repository<Sorteo>,
  private readonly sorteoGateway: SorteoGateway,


  ) {}

  async findAll(sorteoId: number) {
    return this.boletoRepo.find({
      where: { sorteo: { id: sorteoId } },
      relations: ['comprador', 'vendedor', 'sorteo'],
    });
  }

  async findOne(id: number) {
    const boleto = await this.boletoRepo.findOne({
      where: { id },
      relations: ['comprador', 'vendedor', 'sorteo'],
    });
    if (!boleto) throw new NotFoundException('Boleto not found');
    return boleto;
  }

 async create(data: CreateBoletoDto) {
  const sorteo = await this.sorteoRepo.findOneBy({ id: data.sorteoId });
  if (!sorteo) throw new NotFoundException('Sorteo not found');

  const boleto = this.boletoRepo.create({
    numero: data.numero,
    precio: data.precio,
    estado: data.estado ?? 'disponible',
    metodoPago: data.metodoPago ?? undefined,
    fechaCompra: data.fechaCompra ? new Date(data.fechaCompra) : undefined,
    sorteo,
    comprador: data.compradorId ? { id: data.compradorId } : undefined,
    vendedor: data.vendedorId ? { id: data.vendedorId } : undefined,
  });

  return this.boletoRepo.save(boleto);
}

async update(id: number, data: UpdateBoletoDto) {
  const boleto = await this.boletoRepo.findOne({
    where: { id },
    relations: ['comprador', 'vendedor', 'sorteo'],
  });
  if (!boleto) throw new NotFoundException('Boleto not found');

  // Check if no real changes
  const noCambio =
    boleto.estado === data.estado &&
    boleto.metodoPago === data.metodoPago &&
    boleto.precio === data.precio &&
    boleto.comprador?.id === data.compradorId &&
    boleto.vendedor?.id === data.vendedorId;

  if (noCambio) {
    console.log('🔁 Boleto sin cambios reales, no se actualiza ni emite socket');
    return boleto;
  }

  // Update properties only if they exist in the DTO
  if (data.fechaCompra !== undefined && data.fechaCompra !== null) {
    boleto.fechaCompra = new Date(data.fechaCompra);
  }

  if (data.estado !== undefined) boleto.estado = data.estado;
  if (data.metodoPago !== undefined) boleto.metodoPago = data.metodoPago;
  if (data.precio !== undefined) boleto.precio = data.precio;

  if (data.compradorId !== undefined) {
boleto.comprador = data.compradorId ? { id: data.compradorId } as Comprador : undefined;
  }

  if (data.vendedorId !== undefined) {
boleto.vendedor = data.vendedorId ? { id: data.vendedorId } as Vendedor : undefined;
  }

  const updatedBoleto = await this.boletoRepo.save(boleto);

  this.sorteoGateway.emitBoletoActualizado(updatedBoleto);

  return updatedBoleto;
}

  async delete(id: number) {
    return this.boletoRepo.delete(id);
  }

  async generarBoletosParaSorteo(sorteoId: number, cantidad: number, precio = 100) {
    const sorteo = await this.sorteoRepo.findOneBy({ id: sorteoId });
    if (!sorteo) throw new NotFoundException('Sorteo not found');

    const boletos: DeepPartial<Boleto>[] = Array.from({ length: cantidad }, (_, i) => ({
      numero: i,
      precio,
      estado: 'disponible',
      sorteo,
    }));

    return this.boletoRepo.save(boletos);
  }

  async apartarBoletosEnLote(compradorId: number, boletos: { id: number }[]) {
    const ids = boletos.map(b => b.id);
    const encontrados = await this.boletoRepo.find({
      where: { id: In(ids) },
    });

    const yaOcupados = encontrados.filter(b => b.estado !== 'disponible');
    const boletosFallidos = yaOcupados.map(b => b.numero);

    const disponibles = encontrados.filter(b => b.estado === 'disponible');

let actualizados: Boleto[] = [];
    if (disponibles.length > 0) {
      actualizados = await this.boletoRepo.save(
        disponibles.map(boleto => ({
          ...boleto,
          estado: 'ocupado',
          fechaCompra: new Date(), // 👈 aquí se guarda
          comprador: { id: compradorId } as Comprador,
        })),
      );

      actualizados.forEach(boleto => this.sorteoGateway.emitBoletoActualizado(boleto));
    }

    return {
      success: true,
      boletosOcupados: boletosFallidos,
    };
  }

  async apartarLoteConComprador(
    nombre: string,
    telefono: string,
    boletos: { id: number }[],
    referidoId?: number,
  ) {
    const comprador = this.compradorRepo.create({
      nombre,
      telefono,
      email: `${Date.now()}@fake.com`,
referidoId: referidoId ?? undefined,
    });
    comprador.creadoEn = new Date();

    await this.compradorRepo.save(comprador);

    const ids = boletos.map(b => b.id);
    const encontrados = await this.boletoRepo.find({
      where: { id: In(ids) },
    });

    const yaOcupados = encontrados.filter(b => b.estado !== 'disponible');
    const boletosFallidos = yaOcupados.map(b => b.numero);

    const disponibles = encontrados.filter(b => b.estado === 'disponible');

    if (disponibles.length > 0) {
      const actualizados = await this.boletoRepo.save(
        disponibles.map(boleto => ({
          ...boleto,
          estado: 'ocupado',
          comprador,
        })),
      );

      actualizados.forEach(boleto => this.sorteoGateway.emitBoletoActualizado(boleto));
    }

    return {
      success: true,
      boletosOcupados: boletosFallidos,
    };
  }

  async findBoletosPorNombreTelefonoYSorteo(nombre: string, telefono: string, sorteoId?: number) {
    const whereComprador: any = {
      nombre: nombre.toLowerCase(),
      telefono,
    };

    const comprador = await this.compradorRepo.findOne({
      where: whereComprador,
      relations: ['boletos', 'boletos.sorteo', 'boletos.vendedor'],
    });

    if (!comprador) {
      return { message: 'Comprador no encontrado', boletos: [] };
    }

    let boletos = comprador.boletos;

    if (sorteoId) {
      boletos = boletos.filter(b => b.sorteo.id === sorteoId);
    }

    return {
      comprador: {
        id: comprador.id,
        nombre: comprador.nombre,
        telefono: comprador.telefono,
      },
      boletos,
    };
  }

  async getBoletosPorClienteSinSorteo(nombre: string, telefono: string) {
    const comprador = await this.compradorRepo.findOne({
      where: { nombre: nombre.toLowerCase(), telefono },
      relations: ['boletos', 'boletos.sorteo', 'boletos.vendedor'],
    });

    if (!comprador) {
      return { message: 'Comprador no encontrado', boletos: [] };
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
