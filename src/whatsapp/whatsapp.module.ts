import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WhatsAppService } from './whatsapp.service';

@Module({
  imports: [HttpModule],          // 👈 Aquí inyectas HttpService
  providers: [WhatsAppService],   // 👈 Registras tu servicio
  exports: [WhatsAppService],     // 👈 Lo exportas para usarlo en otros módulos
})
export class WhatsAppModule {}
