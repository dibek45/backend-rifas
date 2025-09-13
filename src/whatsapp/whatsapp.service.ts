import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token =
    'EAASTcEqZBJ7UBPV1B3tenuHVXZAzZCCMkcUZA6STZBAWKUmGVyq5zWvtyTqeYCgZCZBwLbdpZChYvQiKvafZBjHigc5SM8IWZCU4fRck3gbIuD0LDdfrMJbLNHVYpslHlzxovYP17noz0Sv8REZBJSxts16l0EVQgUxmcs6OeOH8g2RqQPK6rppGhdc65L7ZBjswjB988pWbLvbTeIqjPZAkzfgGnjxbCaHZAGWuMDizSgZCU7r';
  private phoneId = '832110753311917';

  // ⚡ Cambia a false cuando pases a producción
  private sandboxMode = true;

  constructor(private http: HttpService) {}

  async sendMessage(to: string, text: string) {
    if (!to.startsWith('+')) {
      to = `+${to}`;
    }

    let payload: any;

    if (this.sandboxMode) {
      // 🟢 En sandbox: usar plantilla hello_world
      payload = {
        messaging_product: 'whatsapp',
        to,
        type: 'template',
        template: {
          name: 'hello_world',
          language: { code: 'en_US' },
        },
      };
      console.log('📤 Enviando mensaje sandbox (hello_world)...');
    } else {
      // 🟢 En producción: enviar texto normal
      payload = {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: text },
      };
      console.log('📤 Enviando mensaje producción (texto libre)...');
    }

    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    console.log('➡️ URL:', `${this.apiUrl}/${this.phoneId}/messages`);
    console.log('➡️ Payload:', JSON.stringify(payload, null, 2));

    try {
      const response = await firstValueFrom(
        this.http.post(`${this.apiUrl}/${this.phoneId}/messages`, payload, {
          headers,
        }),
      );
      console.log('✅ Respuesta WhatsApp API:', response.data);
      return response.data;
    } catch (error) {
      console.error(
        '❌ Error al enviar mensaje:',
        error.response?.data || error.message || error,
      );
      throw error;
    }
  }
}
