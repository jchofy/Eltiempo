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
busquedasPueblos:any[]=[];


buscar(texto:string){
    this.weatherService.buscar(texto).subscribe((respuesta:any)=>{ 
    this.weatherService.busqueda=respuesta;
    console.log(this.weatherService.busqueda);
   });
}
}
