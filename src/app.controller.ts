import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { WhatsAppService } from './whatsapp/whatsapp.service';

@Controller()
export class AppController {
  constructor(private readonly whatsappService: WhatsAppService) {}

  // ✅ Endpoint de prueba
  @Get('health1')
  getHealth() {
    console.log('✅ Health check desde rifas');
    return { status: 'ok desde rifas' };
  }

  // ✅ Verificación del Webhook (cuando lo registras en Meta)
  @Get('webhook')
  verifyWebhook(@Query() query) {
    const VERIFY_TOKEN = 'mi_token_secreto'; // lo defines tú en Meta Developers
    console.log('🔎 Intento de verificación de webhook:', query);

    if (
      query['hub.mode'] === 'subscribe' &&
      query['hub.verify_token'] === VERIFY_TOKEN
    ) {
      console.log('✅ Webhook verificado correctamente');
      return query['hub.challenge'];
    }

    console.warn('❌ Error de verificación de Webhook');
    return 'Error de verificación';
  }

  // ✅ Aquí llegan los mensajes de WhatsApp
  @Post('webhook')
  async handleMessage(@Req() req) {
    console.log('📩 Webhook recibido:', JSON.stringify(req.body, null, 2));

    const entry = req.body.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    if (!entry) {
      console.warn('⚠️ No se encontró mensaje en el body');
      return { status: 'no message' };
    }

    // 🟢 Aseguramos que el número tenga el formato correcto
    let from = entry.from;
    if (!from.startsWith('+')) {
      from = `+${from}`;
    }

    const text = entry.text?.body?.toLowerCase() || '';

    console.log(`👤 Mensaje de: ${from}`);
    console.log(`💬 Texto recibido: "${text}"`);

    try {
      if (text.includes('hola') || text.includes('buenas')) {
        console.log('🤖 Enviando respuesta automática...');
        await this.whatsappService.sendMessage(
          from,
          '👋 Buenas tardes, ¿qué servicio necesitas?\n\n' +
            '1️⃣ Uñas 💅\n' +
            '2️⃣ Pestañas 👁️\n' +
            '3️⃣ Corte de pelo 💇\n\n' +
            'Responde con el número de la opción.'
        );
        console.log('✅ Mensaje enviado correctamente');
      } else {
        console.log('ℹ️ Mensaje no coincide con saludo, no se responde');
      }
    } catch (err) {
      console.error('❌ Error al enviar mensaje:', err.response?.data || err.message || err);
      return { status: 'error', error: err.message };
    }

    return { status: 'ok' };
  }
}
