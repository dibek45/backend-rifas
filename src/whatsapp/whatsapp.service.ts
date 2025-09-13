import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token =
    'EAASTcEqZBJ7UBPV1B3tenuHVXZAzZCCMkcUZA6STZBAWKUmGVyq5zWvtyTqeYCgZCZBwLbdpZChYvQiKvafZBjHigc5SM8IWZCU4fRck3gbIuD0LDdfrMJbLNHVYpslHlzxovYP17noz0Sv8REZBJSxts16l0EVQgUxmcs6OeOH8g2RqQPK6rppGhdc65L7ZBjswjB988pWbLvbTeIqjPZAkzfgGnjxbCaHZAGWuMDizSgZCU7r';
  private phoneId = '832110753311917';

  constructor(private http: HttpService) {}

  async sendMessage(to: string, text: string) {
    // 🟢 Asegurar formato correcto del número
    if (!to.startsWith('+')) {
      to = `+${to}`;
    }

    const payload = {
      messaging_product: 'whatsapp',
      to,
      type: 'text',
      text: { body: text },
    };

    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    console.log('📤 Enviando mensaje a WhatsApp API...');
    console.log('➡️ URL:', `${this.apiUrl}/${this.phoneId}/messages`);
    console.log('➡️ Headers:', headers);
    console.log('➡️ Payload:', JSON.stringify(payload, null, 2));

    try {
      const response = await firstValueFrom(
        this.http.post(`${this.apiUrl}/${this.phoneId}/messages`, payload, {
          headers,
        }),
      );

      console.log('✅ Respuesta de WhatsApp API:', response.data);
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
