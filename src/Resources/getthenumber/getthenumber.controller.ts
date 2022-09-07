import { Body, Controller, Get, Param } from '@nestjs/common';
import { GetthenumberService } from './getthenumber.service';

@Controller('getthenumber')
export class GetthenumberController {
    constructor(private Get_the_number_Service:GetthenumberService){

    }

    @Get(':first/:second')
    getTheNumber(@Param('first') first: number, @Param('second') second: number ){
        //return num;
        return this.Get_the_number_Service.getTheNumber(first,second);
    }
}
