import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';
import { Vendedor } from './entities/vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])], // ✅ Esto es obligatorio
  controllers: [VendedorController],
  providers: [VendedorService],
})
export class VendedorModule {}
