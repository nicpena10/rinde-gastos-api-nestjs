import { IsNotEmpty, IsString, MinLength } from "class-validator";


export class MyBirthDayDTO{
    @IsString() 
    @IsNotEmpty() 
    @MinLength(5)  
    birthdate : string;
}
