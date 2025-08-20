import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { ServicioService } from './servicio.service';
import { CreateServicioDto, UpdateServicioDto } from './servicio.dto';

@Controller('servicios')
export class ServicioController {
  constructor(private readonly servicioService: ServicioService) {}

  @Get('admin/:adminId')
  findByAdmin(@Param('adminId', ParseIntPipe) adminId: number) {
    return this.servicioService.findByAdmin(adminId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.servicioService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateServicioDto) {
    return this.servicioService.create(dto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateServicioDto,
  ) {
    return this.servicioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.servicioService.remove(id);
  }
}
