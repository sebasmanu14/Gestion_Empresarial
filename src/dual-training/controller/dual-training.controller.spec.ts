import { Test, TestingModule } from '@nestjs/testing';
import { DualTrainingController } from './dual-training.controller';

describe('DualTrainingController', () => {
  let controller: DualTrainingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DualTrainingController],
    }).compile();

    controller = module.get<DualTrainingController>(DualTrainingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
