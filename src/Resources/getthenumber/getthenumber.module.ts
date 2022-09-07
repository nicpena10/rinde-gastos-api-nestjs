import { Module } from '@nestjs/common';
import { GetthenumberController } from './getthenumber.controller';
import { GetthenumberService } from './getthenumber.service';

@Module({
  controllers: [GetthenumberController],
  providers: [GetthenumberService]
})
export class GetthenumberModule {}
