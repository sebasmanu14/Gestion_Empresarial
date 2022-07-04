/* eslint-disable prettier/prettier */
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessTutorsController } from './business-tutors.controller';

describe('BusinessTutorsController', () => {
  let controller: BusinessTutorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessTutorsController],
    }).compile();

    controller = module.get<BusinessTutorsController>(BusinessTutorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
