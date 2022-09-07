import { Body, Controller, Get, Param } from '@nestjs/common';
import { GetTheNumberDTO } from './getthenumber.dto';
import { GetthenumberService } from './getthenumber.service';

@Controller('getthenumber')
export class GetthenumberController {
    constructor(private Get_the_number_Service:GetthenumberService){

    }

    @Get('/GetTheNumber')
    getTheNumber(@Body() params:GetTheNumberDTO ){
        //return num;
        return this.Get_the_number_Service.getTheNumber(params);
    }
}
