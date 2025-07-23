import { Module } from '@nestjs/common';
import { BoletoService } from './boleto.service';
import { BoletoController } from './boleto.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule], // 👈 agrégalo aquí
    exports: [BoletoService], // 👈 esto es CLAVE

  controllers: [BoletoController],
  providers: [BoletoService],
})
export class BoletoModule {}
