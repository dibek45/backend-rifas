import { 
  Controller, Get, Post, Body, Patch, Param, Delete, Query, 
  BadRequestException, Req, 
  ForbiddenException
} from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';
import { Request } from 'express';
import { SorteoService } from 'src/sorteo/sorteo.service';

@Controller('boleto')
export class BoletoController {
  constructor(
    private readonly boletoService: BoletoService,
        private readonly sorteoService: SorteoService // 👈 inyecta el sorteoService

  ) {}

  @Get('por-cliente')
  async buscarPorNombreTelefonoYSorteo(
    @Query('nombre') nombre: string,
    @Query('telefono') telefono: string,
    @Query('sorteoId') sorteoIdStr?: string // <- opcional
  ) {
    const sorteoId = sorteoIdStr ? parseInt(sorteoIdStr, 10) : undefined;
    return this.boletoService.findBoletosPorNombreTelefonoYSorteo(
      nombre,
      telefono,
      sorteoId
    );
  }

  @Get('por-cliente-sin-sorteo')
  async getBoletosPorClienteSinSorteo(
    @Query('nombre') nombre: string,
    @Query('telefono') telefono: string
  ) {
    return this.boletoService.getBoletosPorClienteSinSorteo(nombre, telefono);
  }

  @Post()
  create(@Body() createBoletoDto: CreateBoletoDto) {
    return this.boletoService.create(createBoletoDto);
  }

  // 👇 Aquí solo añadimos el dominio
@Get(':sorteoId')
async findAll(@Param('sorteoId') sorteoId: string, @Req() req: Request) {
  const id = parseInt(sorteoId, 10);
  if (isNaN(id)) {
    throw new BadRequestException('sorteoId must be a valid number');
  }

  // dominio del request (ej: api.sorteos.sa.dibeksolutions.com → sorteos.sa.dibeksolutions.com)
  const dominioRequest = req.headers.host?.replace(/^api\./, '');
  console.log('🌍 Host recibido en request:', dominioRequest);

  if (!dominioRequest) {
    throw new BadRequestException('Dominio no detectado en el header');
  }

  // obtener sorteo de la BD
  const sorteo = await this.sorteoService.findOne(id); // 👈 asumiendo que ya tienes este método
  if (!sorteo) {
    throw new BadRequestException(`No existe sorteo con id ${id}`);
  }

  // comparar dominio del request vs dominio en la BD
  if (sorteo.dominio !== dominioRequest) {
    throw new ForbiddenException(
      `El dominio ${dominioRequest} no corresponde al sorteo ${id}`
    );
  }

  // si todo bien → pasa al service de boletos
  return this.boletoService.findAll(id, dominioRequest);
}




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoletoDto: UpdateBoletoDto) {
    return this.boletoService.update(+id, updateBoletoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletoService.delete(+id);
  }

  @Post('/apartar-lote')
  async apartarLote(
    @Body() body: { nombre: string; telefono: string; boletos: { id: number }[] }
  ) {
    const { nombre, telefono, boletos } = body;
    return this.boletoService.apartarLoteConComprador(nombre, telefono, boletos);
  }
}
