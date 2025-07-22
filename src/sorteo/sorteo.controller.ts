import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { SorteoService } from './sorteo.service';
import { CreateSorteoDto } from './dto/create-sorteo.dto';
import { UpdateSorteoDto } from './dto/update-sorteo.dto';

@Controller('sorteos')
export class SorteoController {
  constructor(private readonly sorteoService: SorteoService) {}

  @Post()
  create(@Body() dto: CreateSorteoDto) {
    return this.sorteoService.create(dto);
  }

  @Get()
  findAll() {
    return this.sorteoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sorteoService.findOne(Number(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sorteoService.delete(Number(id));
  }

  @Put(':id')
update(@Param('id') id: string, @Body() data: UpdateSorteoDto) {
  return this.sorteoService.update(+id, data);
}
}
