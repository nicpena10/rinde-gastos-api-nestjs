import { Test, TestingModule } from '@nestjs/testing';
import { ConvertAmountController } from './convert-amount.controller';

describe('ConvertAmountController', () => {
  let controller: ConvertAmountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertAmountController],
    }).compile();

    controller = module.get<ConvertAmountController>(ConvertAmountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
