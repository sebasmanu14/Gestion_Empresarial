import { Test, TestingModule } from '@nestjs/testing';
import { SchoolPeriodService } from './school-period.service';

describe('SchoolPeriodService', () => {
  let service: SchoolPeriodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SchoolPeriodService],
    }).compile();

    service = module.get<SchoolPeriodService>(SchoolPeriodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
