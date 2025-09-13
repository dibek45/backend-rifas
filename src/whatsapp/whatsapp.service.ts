import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token =
    'EAASTcEqZBJ7UBPScB2hSDKVdASpHbFe4TTkEPsRVo7ROWdVp7EJh6LZBKl08MxE7DAV89fDJ3O72gtXIzUeOS2FYt7XR6ReTQd2jk2c4mhn4UylxkCux89jpZCaAga3kbcTAkqsZCmZCM5ZC4PCFJPwG75Eg4qcDih3FJLBcIrRnlaZAMryZCbWVNtFbqCy6cXmPXYwEDGiSa8UZA03m0bZAejwYAlWX6Bldr98LPLYLNtkyo4';
  private phoneId = '832110753311917';

  // ⚡ Cambia a false cuando pases a producción
  private sandboxMode = true;

  constructor(private http: HttpService) {}


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
