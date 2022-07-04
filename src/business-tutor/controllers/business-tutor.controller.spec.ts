import { Test, TestingModule } from '@nestjs/testing';
import { BusinessTutorController } from '../controllers/business-tutor.controller';

describe('BusinessTutorController', () => {
  let controller: BusinessTutorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessTutorController],
    }).compile();

    controller = module.get<BusinessTutorController>(BusinessTutorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
