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

@Get(':sorteoId')
async findAll(@Param('sorteoId') sorteoId: string, @Req() req: Request) {
  const id = parseInt(sorteoId, 10);
  if (isNaN(id)) throw new BadRequestException('sorteoId must be a valid number');

  const dominioRequest = req.headers['x-client-domain'] as string;
  console.log('🌍 Dominio recibido del frontend:', dominioRequest);

  if (!dominioRequest) {
    throw new BadRequestException('Dominio no detectado en el header');
  }

  const sorteo = await this.sorteoService.findOne(id);
  if (!sorteo) throw new BadRequestException(`No existe sorteo con id ${id}`);

  if (sorteo.dominio !== dominioRequest) {
    throw new ForbiddenException(
      `El dominio ${dominioRequest} no corresponde al sorteo ${id}`
    );
  }

  return this.boletoService.findAll(id);
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
