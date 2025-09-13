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

 async sendTextMessage(to: string, text: string) {
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

  console.log('📤 Enviando mensaje de texto...');
  console.log('➡️ Payload:', JSON.stringify(payload, null, 2));

  return firstValueFrom(
    this.http.post(`${this.apiUrl}/${this.phoneId}/messages`, payload, { headers }),
  );
}

async sendTemplateMessage(to: string) {
  if (!to.startsWith('+')) {
    to = `+${to}`;
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
