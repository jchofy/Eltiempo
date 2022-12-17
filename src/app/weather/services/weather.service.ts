import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../interface/weather';
import { WeatherDetalles } from '../interface/weatherDetalles';

@Injectable({
  providedIn: 'root'
})
export class WeatherservicesService {



  constructor(private HttpClient:HttpClient) {
   }

   horaEmpiezaDetalles:number=0;
   busqueda:any;
   busquedaDetallada!:WeatherDetalles[];
   private apikey:string = "c50753471a70495326473300eecc3c5b";
   private lang:string="es";
   buscandoSpinner=false;
   //https://api.openweathermap.org/data/2.5/weather?q=jaen&appid=c50753471a70495326473300eecc3c5b

    buscar(cadena:string):Observable<Weather>{

      return this.HttpClient.get<Weather>(`https://api.openweathermap.org/data/2.5/weather?q=${cadena}&lang=${this.lang}&appid=${this.apikey}`);
    }
    
    buscarDetalles(cadena:string):Observable<WeatherDetalles>{

      return this.HttpClient.get<WeatherDetalles>(`https://api.openweathermap.org/data/2.5/forecast?q=${cadena}&lang=${this.lang}&appid=${this.apikey}`)
    }
}

