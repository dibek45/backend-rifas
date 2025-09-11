import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WhatsAppService {
  private apiUrl = 'https://graph.facebook.com/v20.0';
  private token = 'EAASTcEqZBJ7UBPcVZApRsd8PMU1eSKZA4ZCqxjKpSajLo3zUwaeaiGvYMuulotiAlJ4UwWyjhO1F0bBZAUZBIQg5UwhRlu96dMPP7rS7KgdxpDMy4rHh9RCKF45nRRhqZCbz5jJ95ZAviZAXWpJa7IvnbFym6A8m32tk7boXTThMxJtKgQeSlOV5sZCs3HZAacHVKaobgjjLf0fTDc2ELMXtsX7oQmiEgEib2oNwZCuQAvyQ65H5LgZDZD';
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
