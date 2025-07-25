import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { CreateBoletoDto } from './dto/create-boleto.dto';
import { UpdateBoletoDto } from './dto/update-boleto.dto';

@Controller('boleto')
export class BoletoController {
  constructor(private readonly boletoService: BoletoService) {}



@Post('apartar-lote')
async apartarLote(
  @Body() body: { nombre: string; telefono: string; boletos: { id: number }[] }
) {
  const { nombre, telefono, boletos } = body;
  return this.boletoService.apartarLoteConComprador(nombre, telefono, boletos);
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
