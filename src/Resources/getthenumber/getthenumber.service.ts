import { Injectable } from '@nestjs/common';
import { GetTheNumberDTO } from './getthenumber.dto';

@Injectable()
export class GetthenumberService {
    getTheNumber(Getthenumber_ARR:GetTheNumberDTO){
        let contatena:string;
       contatena= numcancatena(Getthenumber_ARR.first,Getthenumber_ARR.second);
        return  `El producto concatenado de la multiplicacion de ${Getthenumber_ARR.first} y ${Getthenumber_ARR.second} es  ${contatena}` ;
        //return  num.first;
    }
}


function numcancatena(first:number,second:number){
    let resultado:string;
    let numerotemp:number;
    numerotemp=0;
    resultado='';
    for(let i=1; i<= second;i++){
        if(resultado.length<=9){ //consideracion para mostrar los primeros 9 numeros
            numerotemp=i * first;
            resultado+= numerotemp;
        }
    }
    return resultado;
}
