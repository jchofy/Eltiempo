import { HttpErrorResponse } from '@angular/common/http';
import { Component} from '@angular/core';
import { WeatherservicesService } from '../services/weather.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor(private weatherService:WeatherservicesService) {  
  }

busqueda:any="";

errorBusqueda:boolean=false;

busquedasPueblos:any[]=[];


buscar(texto:HTMLInputElement){
  this.errorBusqueda=false;
    this.weatherService.buscar(texto.value.trim()).subscribe((respuesta:any)=>{ 
    this.weatherService.busqueda=respuesta;
    },(error:any)=>{
      this.errorBusqueda=true;
      this.weatherService.busqueda=null;
     })
     texto.value=""
     
}




}
