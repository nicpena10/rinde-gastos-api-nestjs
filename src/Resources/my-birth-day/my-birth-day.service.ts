import { BadRequestException, Injectable } from '@nestjs/common';
import { isString } from 'class-validator';
import { MyBirthDayDTO } from './my-birth-dat.dto';

@Injectable()
export class MyBirthDayService {
    getDaysUntilMyBirthday( birthdate_ARR :MyBirthDayDTO ){
       
      
        //let fechaInicio = new Date('2022-02-13').getTime();
        if(birthdate_ARR.birthdate.includes("/")){
            birthdate_ARR.birthdate =birthdate_ARR.birthdate.replace("/","-");
        }
        let birthdateArray = birthdate_ARR.birthdate.split("-");
        let fechaInicio = new Date().getTime();
        let year = new Date().getFullYear() + 1;
        let fechacompuesta =''+year+'-'+birthdate_ARR.birthdate;
        if(parseInt(birthdateArray[0]) > 12 && parseInt(birthdateArray[1]) <= 12 ){
            fechacompuesta =''+year+'-'+birthdateArray[1]+'-'+birthdateArray[0];
        }else{
            fechacompuesta =''+year+'-'+birthdateArray[0]+'-'+birthdateArray[1];
        }
       
       
        let fechaFin    = new Date(fechacompuesta).getTime();

        let diff = fechaFin - fechaInicio;       
        diff= (Math.floor(diff/(1000*60*60*24)));

        return  'Faltan '+ diff +' dias app para tu cumple años';
    }
}
