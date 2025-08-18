import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity'; // ✅ cambiamos Sorteo → Evento
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';
import { BoletoService } from 'src/boleto/boleto.service';
import { Usuario } from 'src/user/entities/user.entity';
import { CuentaBancaria } from 'src/vendedor/entities/cuenta-bancaria.entity';

@Injectable()
export class EventoService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
    private readonly boletoService: BoletoService,
  ) {}

  findAll() {
    return this.eventoRepository.find({
      relations: ['boletos'],
    });
  }

  findOne(id: number) {
    return this.eventoRepository.findOne({
      where: { id },
      relations: ['boletos'],
    });
  }

  async create(dto: CreateEventoDto) {
    const evento = new Evento();
    evento.nombre = dto.nombre;
    evento.descripcion = dto.descripcion;
    evento.imagen = dto.imagen;
    evento.fecha = new Date(dto.fecha);
    evento.cierreVentas = dto.cierreVentas ? new Date(dto.cierreVentas) : null;
    evento.costoBoleto = dto.costoBoleto;
    evento.totalBoletos = dto.totalBoletos;
    evento.boletosVendidos = dto.boletosVendidos ?? 0;
    evento.estado = dto.estado ?? 'activo';
    evento.numeroWhatsApp = dto.numeroWhatsApp;
    evento.nombreEmpresa = dto.nombreEmpresa;
    evento.linkfacebook = dto.linkfacebook;
    evento.numeroCuenta = dto.numeroCuenta;
    evento.tipoBanco = dto.tipoBanco;
    evento.numeroDeEvento = dto.numeroDeEvento; // 👈 renombrar si cambia en tu entidad
    evento.mensajeWhatsappInfo = dto.mensajeWhatsappInfo;
    evento.mensajeWhatsappApartado = dto.mensajeWhatsappApartado;
    evento.mensajeWhatsappConfirmado = dto.mensajeWhatsappConfirmado;
    evento.mensajeWhatsappAnuncio = dto.mensajeWhatsappAnuncio;

    evento.admin = { id: dto.adminId } as Usuario;
    evento.cuentaBancaria = dto.cuentaBancariaId
      ? ({ id: dto.cuentaBancariaId } as CuentaBancaria)
      : null;

    const savedEvento = await this.eventoRepository.save(evento);

    await this.boletoService.generarBoletosParaSorteo( // ⚠️ si cambias también “sorteo” a “evento” aquí deberías renombrar este método
      savedEvento.id,
      dto.cantidadBoletos,
      dto.precioBoletos ?? dto.costoBoleto ?? 100,
    );

    return savedEvento;
  }

  async update(id: number, data: UpdateEventoDto) {
    await this.eventoRepository.update(id, data);
    return this.findOne(id);
  }

  async delete(id: number) {
    return this.eventoRepository.delete(id);
  }
}
