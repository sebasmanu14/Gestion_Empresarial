import { Test, TestingModule } from '@nestjs/testing';
import { DualTrainingService } from './dual-training.service';

describe('DualTrainingService', () => {
  let service: DualTrainingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DualTrainingService],
    }).compile();

    service = module.get<DualTrainingService>(DualTrainingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
