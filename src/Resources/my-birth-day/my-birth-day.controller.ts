import { Body, Controller, Get, Param, ParseArrayPipe, ParseUUIDPipe } from '@nestjs/common';
import { MyBirthDayDTO } from './my-birth-dat.dto';
import { MyBirthDayService } from './my-birth-day.service';

@Controller('my-birth-day')
export class MyBirthDayController {

    constructor(private My_Birth_Day_Service:MyBirthDayService){

    }

    @Get('/birthdate')
    getDaysUntilMyBirthday(@Body() params:MyBirthDayDTO){
        
        return this.My_Birth_Day_Service.getDaysUntilMyBirthday(params);
    }
}
