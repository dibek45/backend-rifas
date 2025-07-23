import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CreateCompradorDto } from './dto/create-comprador.dto';
import { UpdateCompradorDto } from './dto/update-comprador.dto';

@Controller('compradores')
export class CompradorController {
  constructor(private readonly compradorService: CompradorService) {}

  @Post()
  create(@Body() createDto: CreateCompradorDto) {
    return this.compradorService.create(createDto);
  }

  @Get()
  findAll() {
    return this.compradorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compradorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateCompradorDto) {
    return this.compradorService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compradorService.remove(+id);
  }
}
