import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';
import { Comprador } from './entities/comprador.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comprador]), // 👈 esto es lo que faltaba
  ],
  controllers: [CompradorController],
  providers: [CompradorService],
  exports: [CompradorService], // opcional si lo usas en otros módulos
})
export class CompradorModule {}
