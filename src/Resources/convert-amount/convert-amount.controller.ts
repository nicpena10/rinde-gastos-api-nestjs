import { Controller, Get, Param } from '@nestjs/common';
import { ConvertAmountService } from './convert-amount.service';

@Controller('convert-amount')
export class ConvertAmountController {

    constructor(private Convert_Amount_Service:ConvertAmountService){

    }

    @Get(':from/:to/:amount/:app_id')
    getConvertedAmount(@Param('from') from: string,@Param('to') to: string, @Param('amount') amount: number ,@Param('app_id') app_id: string){
       return this.Convert_Amount_Service.getConvertedAmount(from,to,amount,app_id);
    }
}
