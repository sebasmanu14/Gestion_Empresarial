import { Test, TestingModule } from '@nestjs/testing';
import { SchoolPeriodController } from './school-period.controller';

describe('SchoolPeriodController', () => {
  let controller: SchoolPeriodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SchoolPeriodController],
    }).compile();

    controller = module.get<SchoolPeriodController>(SchoolPeriodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
