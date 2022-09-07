import { Module } from '@nestjs/common';
import { ConvertAmountController } from './convert-amount.controller';
import { ConvertAmountService } from './convert-amount.service';

@Module({
  controllers: [ConvertAmountController],
  providers: [ConvertAmountService]
})
export class ConvertAmountModule {}
