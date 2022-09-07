import { Test, TestingModule } from '@nestjs/testing';
import { GetthenumberController } from './getthenumber.controller';

describe('GetthenumberController', () => {
  let controller: GetthenumberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetthenumberController],
    }).compile();

    controller = module.get<GetthenumberController>(GetthenumberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
