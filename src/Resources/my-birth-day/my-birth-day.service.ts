import { Injectable } from '@nestjs/common';

@Injectable()
export class MyBirthDayService {
    getDaysUntilMyBirthday(birthdate :string){
        //let fechaInicio = new Date('2022-02-13').getTime();
        let birthdateArray = birthdate.split("-");
        let fechaInicio = new Date().getTime();
        let year = new Date().getFullYear() + 1;
        let fechacompuesta =''+year+'-'+birthdate;
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
