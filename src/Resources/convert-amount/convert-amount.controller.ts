import { Body, Controller, Get, Param } from '@nestjs/common';
import { ConvertAmountService } from './convert-amount.service';
import { ConvertAmountDTO } from './convertamount.dto';

@Controller('convert-amount')
export class ConvertAmountController {

    constructor(private Convert_Amount_Service:ConvertAmountService){

    }

    @Get('/GetConvertAmount')
    getConvertedAmount(@Body() params:ConvertAmountDTO){
       return this.Convert_Amount_Service.getConvertedAmount(params);
    }
}
