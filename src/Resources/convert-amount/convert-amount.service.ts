import { Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';

@Injectable()
export class ConvertAmountService {


    async getConvertedAmount(from:string,to:string,amount:number,app_id:string){
        let mensaje:string;
        mensaje='';
      //const resp = await axios.get(`https://openexchangerates.org/api/convert/${amount}/${from}/${to}?app_id=${app_id}`)
      const resp = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${app_id}`)
      .then((respuesta)=> {
        //console.log(respuesta.data.rates[from]);
        let valorfrom:number = amount/respuesta.data.rates[from];
        //console.log(valorfrom);
        //console.log(respuesta.data.rates[to]);
        let valorto:number = valorfrom * respuesta.data.rates[to];
        //console.log(valorto);
        mensaje = `${amount} en ${from} equivalen a ${valorto} ${to} `;
      })
      .catch((error)=>{
        //console.log(error);        
        //console.log(mensaje);
        mensaje = error.response.data.description;
       
      })
      return mensaje;
    }
}
