import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GetthenumberModule } from './resources/getthenumber/getthenumber.module';
import { MyBirthDayModule } from './resources/my-birth-day/my-birth-day.module';
import { ConvertAmountModule } from './resources/convert-amount/convert-amount.module';

@Module({
  imports: [GetthenumberModule, MyBirthDayModule, ConvertAmountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
