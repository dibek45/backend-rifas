// src/agenda/cita/cita.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { CitaService } from './cita.service';
import { Cita } from './cita.entity';

@Controller('citas')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post()
  async crear(@Body() cita: Partial<Cita>): Promise<Cita> {
    return this.citaService.crearCita(cita);
  }

  @Get()
  async listar(): Promise<Cita[]> {
    return this.citaService.obtenerCitas();
  }

  @Get(':id')
  async obtener(@Param('id') id: number): Promise<Cita | null> {
    return this.citaService.obtenerCitaPorId(id);
  }

  @Put(':id')
  async actualizar(@Param('id') id: number, @Body() data: Partial<Cita>): Promise<Cita> {
    return this.citaService.actualizarCita(id, data);
  }

  @Delete(':id')
  async eliminar(@Param('id') id: number): Promise<{ mensaje: string }> {
    await this.citaService.eliminarCita(id);
    return { mensaje: 'Cita eliminada correctamente' };
  }
}
