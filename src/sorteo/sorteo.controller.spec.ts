import { Test, TestingModule } from '@nestjs/testing';
import { SorteoController } from './sorteo.controller';
import { SorteoService } from './sorteo.service';

describe('SorteoController', () => {
  let controller: SorteoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SorteoController],
      providers: [SorteoService],
    }).compile();

    controller = module.get<SorteoController>(SorteoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
