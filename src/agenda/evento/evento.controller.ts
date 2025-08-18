import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { EventoService } from './cita.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('eventos')
export class EventoController {
  constructor(private readonly eventoService: EventoService) {}

  @Post()
  create(@Body() dto: CreateEventoDto) {
    return this.eventoService.create(dto);
  }

  @Get()
  findAll() {
    return this.eventoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventoService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventoService.delete(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateEventoDto) {
    return this.eventoService.update(+id, data);
  }
}
