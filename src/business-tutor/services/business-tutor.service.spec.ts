import { Test, TestingModule } from '@nestjs/testing';
import { BusinessTutorService } from './business-tutor.service';

describe('BusinessTutorService', () => {
  let service: BusinessTutorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessTutorService],
    }).compile();

    service = module.get<BusinessTutorService>(BusinessTutorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
