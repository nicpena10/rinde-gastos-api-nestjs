import { Test, TestingModule } from '@nestjs/testing';
import { MyBirthDayService } from './my-birth-day.service';

describe('MyBirthDayService', () => {
  let service: MyBirthDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyBirthDayService],
    }).compile();

    service = module.get<MyBirthDayService>(MyBirthDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
