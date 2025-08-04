import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

    @Get('health1')
  getHealth() {
    return { status: 'ok desde rifas' };
  }
}
