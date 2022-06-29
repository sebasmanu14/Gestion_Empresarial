import { Test, TestingModule } from '@nestjs/testing';
import { BusinessTutorsService } from './business-tutors.service';

describe('BusinessTutorsService', () => {
  let service: BusinessTutorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessTutorsService],
    }).compile();

    service = module.get<BusinessTutorsService>(BusinessTutorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
