import { Module } from '@nestjs/common';
import { CompradorService } from './comprador.service';
import { CompradorController } from './comprador.controller';

@Module({
  imports: [],
  controllers: [CompradorController],
  providers: [CompradorService],
})
export class CompradorModule {}
