import { Injectable } from '@nestjs/common';

@Injectable()
export class GetthenumberService {
    getTheNumber(first:number,second:number){
       let contatena:string;
       contatena= numcancatena(first,second);
        return  `El producto concatenado de la multiplicacion de ${first} y ${second} es  ${contatena}` ;
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
