import { Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';
import { ConvertAmountDTO } from './convertamount.dto';

@Injectable()
export class ConvertAmountService {


    async getConvertedAmount(ConvertAmount:ConvertAmountDTO){
     
        let mensaje:string;
        mensaje='';
      //const resp = await axios.get(`https://openexchangerates.org/api/convert/${amount}/${from}/${to}?app_id=${app_id}`)
      const resp = await axios.get(`https://openexchangerates.org/api/latest.json?app_id=${ConvertAmount.app_id}`)
      .then((respuesta)=> {
        
        let valorfrom:number = ConvertAmount.amount/respuesta.data.rates[ConvertAmount.from];
        
        let valorto:number = valorfrom * respuesta.data.rates[ConvertAmount.to];
        
        mensaje = `${ConvertAmount.amount} en ${ConvertAmount.from} equivalen a ${valorto} ${ConvertAmount.to} `;
      })
      .catch((error)=>{
        
        mensaje = error.response.data.description;
       
      })
      return mensaje;
    }
}
