import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BoletoModule } from './boleto/boleto.module';
import { SorteoModule } from './sorteo/sorteo.module';
import { PrismaModule } from './prisma/prisma.module';
import { CompradorModule } from './comprador/comprador.module';
import { VendedorModule } from './vendedor/vendedor.module';

@Module({
  imports: [UserModule, BoletoModule, SorteoModule, PrismaModule, CompradorModule, VendedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
