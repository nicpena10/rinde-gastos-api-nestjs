import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class ConvertAmountDTO{
    @IsNumber()
    @IsNotEmpty()
    amount:number;

    @IsString() 
    @IsNotEmpty()      
    from : string;

    @IsString() 
    @IsNotEmpty()      
    to : string;

    @IsString() 
    @IsNotEmpty()      
    app_id : string;
}