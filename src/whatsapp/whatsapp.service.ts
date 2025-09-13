import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token =
    'EAASTcEqZBJ7UBPV3rFvNihGwTQNCddAXbKk93kZAOw1CJJR424sYiAR60NvVXDqCfPA5c39iQDVKNG2ykhov75vyn64FQ4rWNimD4zszFZCqr5nZCUYIvYvP5SUJBIZBm4kzjg37AEcLZAnpaFgXvuvAWpHft2ak1ueNQiuiR46yAv1xlEyIj7qimABI4SKwQLfeokQUQVgJbBmR5eEdxOANmAp0KLmsCNtQtB0aZC0ZAPcZD';
  private phoneId = '832110753311917';

  // ⚡ Cambia a false cuando pases a producción
  private sandboxMode = true;

  constructor(private http: HttpService) {}

private formatNumber(to: string): string {
  if (this.sandboxMode) {
    // Meta espera formato sin +
    // y en muchos casos sin el "1" intermedio
    return to.replace(/^\+?521/, '52'); 
  }
  if (!to.startsWith('+')) {
    return `+${to}`;
  }
  return to;
}


  async sendTemplateMessage(to: string) {
    const formattedTo = this.formatNumber(to);

    const payload = {
      messaging_product: 'whatsapp',
      to: formattedTo,
      type: 'template',
      template: {
        name: 'hello_world',
        language: { code: 'en_US' },
      },
    };

    const headers = {
      Authorization: `Bearer ${this.token}`,
      'Content-Type': 'application/json',
    };

    console.log('📤 Enviando plantilla hello_world...');
    console.log('➡️ URL:', `${this.apiUrl}/${this.phoneId}/messages`);
    console.log('➡️ To:', formattedTo);
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
