import { Test, TestingModule } from '@nestjs/testing';
import { GetthenumberService } from './getthenumber.service';

describe('GetthenumberService', () => {
  let service: GetthenumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetthenumberService],
    }).compile();

    service = module.get<GetthenumberService>(GetthenumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
