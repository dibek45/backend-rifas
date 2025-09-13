import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token = 'EAASTcEqZBJ7UBPV1B3tenuHVXZAzZCCMkcUZA6STZBAWKUmGVyq5zWvtyTqeYCgZCZBwLbdpZChYvQiKvafZBjHigc5SM8IWZCU4fRck3gbIuD0LDdfrMJbLNHVYpslHlzxovYP17noz0Sv8REZBJSxts16l0EVQgUxmcs6OeOH8g2RqQPK6rppGhdc65L7ZBjswjB988pWbLvbTeIqjPZAkzfgGnjxbCaHZAGWuMDizSgZCU7r';
  private phoneId = '832110753311917';

  constructor(private http: HttpService) {}

  async sendMessage(to: string, text: string) {
      return firstValueFrom(this.http.post(
      `${this.apiUrl}/${this.phoneId}/messages`,
      {
        messaging_product: 'whatsapp',
        to,
        type: 'text',
        text: { body: text },
      },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      },
    ));
  }
}
