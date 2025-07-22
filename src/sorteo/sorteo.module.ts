import { Module } from '@nestjs/common';
import { SorteoService } from './sorteo.service';
import { SorteoController } from './sorteo.controller';

@Module({
  controllers: [SorteoController],
  providers: [SorteoService],
})
export class SorteoModule {}
