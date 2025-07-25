import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';

@Controller('boleto')
export class BoletoController {
  constructor(private readonly boletoService: BoletoService) {}



@Get('por-cliente')
async buscarPorNombreTelefonoYSorteo(
  @Query('nombre') nombre: string,
  @Query('telefono') telefono: string,
  @Query('sorteoId') sorteoIdStr: string
) {
  const sorteoId = parseInt(sorteoIdStr, 10);
  return this.boletoService.findBoletosPorNombreTelefonoYSorteo(
    nombre,
    telefono,
    sorteoId
  );
}



  @Post()
  create(@Body() createBoletoDto: CreateBoletoDto) {
    return this.boletoService.create(createBoletoDto);
  }

  @Get()
  findAll() {
    return this.boletoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.boletoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBoletoDto: UpdateBoletoDto) {
    return this.boletoService.update(+id, updateBoletoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.boletoService.delete(+id);
  }
}
