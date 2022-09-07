import { Test, TestingModule } from '@nestjs/testing';
import { MyBirthDayController } from './my-birth-day.controller';

describe('MyBirthDayController', () => {
  let controller: MyBirthDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyBirthDayController],
    }).compile();

    controller = module.get<MyBirthDayController>(MyBirthDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
