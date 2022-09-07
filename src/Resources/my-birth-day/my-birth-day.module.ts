import { Module } from '@nestjs/common';
import { MyBirthDayController } from './my-birth-day.controller';
import { MyBirthDayService } from './my-birth-day.service';

@Module({
  controllers: [MyBirthDayController],
  providers: [MyBirthDayService]
})
export class MyBirthDayModule {}
