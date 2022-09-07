import { IsNotEmpty, IsNumber } from "class-validator";


export class GetTheNumberDTO{
    @IsNumber()
    @IsNotEmpty()
    first:number;

    @IsNumber()
    @IsNotEmpty()
    second:number;
}