import { Module } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
      imports: [PrismaModule], // 👈 agrégalo aquí
  
  controllers: [VendedorController],
  providers: [VendedorService],
})
export class VendedorModule {}
