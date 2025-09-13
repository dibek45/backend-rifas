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


async sendTemplateMessage(to: string) {
   if (this.sandboxMode) {
    to = to.replace(/^\+/, ''); // elimina "+"
  }

  const payload = {
    messaging_product: 'whatsapp',
    to,
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
  console.log('➡️ Payload:', JSON.stringify(payload, null, 2));

  return firstValueFrom(
    this.http.post(`${this.apiUrl}/${this.phoneId}/messages`, payload, { headers }),
  );
}

}
