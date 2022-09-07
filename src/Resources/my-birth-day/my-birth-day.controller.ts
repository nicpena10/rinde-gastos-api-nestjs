import { Controller, Get, Param } from '@nestjs/common';
import { MyBirthDayService } from './my-birth-day.service';

@Controller('my-birth-day')
export class MyBirthDayController {

    constructor(private My_Birth_Day_Service:MyBirthDayService){

    }

    @Get(':birthdate')
    getDaysUntilMyBirthday(@Param('birthdate') birthdate:string){
        return this.My_Birth_Day_Service.getDaysUntilMyBirthday(birthdate);
    }
}
