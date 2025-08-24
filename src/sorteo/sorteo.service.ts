import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sorteo } from './entities/sorteo.entity'; // adjust path
import { CreateSorteoDto } from './dto/create-sorteo.dto';
import { UpdateSorteoDto } from './dto/update-sorteo.dto';
import { BoletoService } from 'src/boleto/boleto.service';
import { Usuario } from 'src/user/entities/user.entity';
import { CuentaBancaria } from 'src/vendedor/entities/cuenta-bancaria.entity';

@Injectable()
export class SorteoService {
  constructor(
    @InjectRepository(Sorteo)
    private readonly sorteoRepository: Repository<Sorteo>,
    private readonly boletoService: BoletoService,
  ) {}

  findAll() {
    return this.sorteoRepository.find({
      relations: ['boletos'],
    });
  }

  findOne(id: number) {
    return this.sorteoRepository.findOne({
      where: { id },
      relations: ['boletos'],
    });
  }

 async create(dto: CreateSorteoDto) {
  const sorteo = new Sorteo();
  sorteo.nombre = dto.nombre;
  sorteo.descripcion = dto.descripcion;
  sorteo.imagen = dto.imagen;
  sorteo.fecha = new Date(dto.fecha);
  sorteo.cierreVentas = dto.cierreVentas ? new Date(dto.cierreVentas) : null;
  sorteo.costoBoleto = dto.costoBoleto;
  sorteo.totalBoletos = dto.totalBoletos;
  sorteo.boletosVendidos = dto.boletosVendidos ?? 0;
  sorteo.estado = dto.estado ?? 'activo';
  sorteo.numeroWhatsApp = dto.numeroWhatsApp;
  sorteo.nombreEmpresa = dto.nombreEmpresa;
  sorteo.linkfacebook = dto.linkfacebook;
  sorteo.numeroCuenta = dto.numeroCuenta;
  sorteo.tipoBanco = dto.tipoBanco;
  sorteo.numeroDeSorteo = dto.numeroDeSorteo;
  sorteo.mensajeWhatsappInfo = dto.mensajeWhatsappInfo;
  sorteo.mensajeWhatsappApartado = dto.mensajeWhatsappApartado;
  sorteo.mensajeWhatsappConfirmado = dto.mensajeWhatsappConfirmado;
  sorteo.mensajeWhatsappAnuncio = dto.mensajeWhatsappAnuncio;
  sorteo.dominio = dto.dominio;


  sorteo.admin = { id: dto.adminId } as Usuario;
  sorteo.cuentaBancaria = dto.cuentaBancariaId ? { id: dto.cuentaBancariaId } as CuentaBancaria : null;

  const savedSorteo = await this.sorteoRepository.save(sorteo);

  await this.boletoService.generarBoletosParaSorteo(
    savedSorteo.id,
    dto.cantidadBoletos,
    dto.precioBoletos ?? dto.costoBoleto ?? 100,
  );

  return savedSorteo;
}


 

  async update(id: number, data: UpdateSorteoDto) {
    await this.sorteoRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    return this.sorteoRepository.delete(id);
  }
}
