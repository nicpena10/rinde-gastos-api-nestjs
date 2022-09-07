import { Test, TestingModule } from '@nestjs/testing';
import { ConvertAmountService } from './convert-amount.service';

describe('ConvertAmountService', () => {
  let service: ConvertAmountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertAmountService],
    }).compile();

    service = module.get<ConvertAmountService>(ConvertAmountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
