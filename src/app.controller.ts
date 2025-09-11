import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { WhatsAppService } from './whatsapp/whatsapp.service';

@Controller()
export class AppController {
  constructor(private readonly whatsappService: WhatsAppService) {}

  // ✅ Endpoint de prueba
  @Get('health1')
  getHealth() {
    return { status: 'ok desde rifas' };
  }

  // ✅ Verificación del Webhook (cuando lo registras en Meta)
  @Get('webhook')
  verifyWebhook(@Query() query) {
    const VERIFY_TOKEN = 'mi_token_secreto'; // lo defines tú en Meta Developers

    if (
      query['hub.mode'] === 'subscribe' &&
      query['hub.verify_token'] === VERIFY_TOKEN
    ) {
      return query['hub.challenge'];
    }
    return 'Error de verificación';
  }

  // ✅ Aquí llegan los mensajes de WhatsApp
  @Post('webhook')
  async handleMessage(@Req() req) {
    const entry = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    if (!entry) return { status: 'no message' };

    const from = entry.from; // número del cliente
    const text = entry.text?.body?.toLowerCase() || '';

    if (text.includes('hola') || text.includes('buenas')) {
      await this.whatsappService.sendMessage(
        from,
        '👋 Buenas tardes, ¿qué servicio necesitas?\n\n' +
          '1️⃣ Uñas 💅\n' +
          '2️⃣ Pestañas 👁️\n' +
          '3️⃣ Corte de pelo 💇\n\n' +
          'Responde con el número de la opción.'
      );
    }

    return { status: 'ok' };
  }
}
