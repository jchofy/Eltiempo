import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../interface/weather';
import { WeatherservicesService } from '../services/weather.service';

@Component({
  selector: 'app-informacion-detallada',
  templateUrl: './informacion-detallada.component.html',
  styleUrls: ['./informacion-detallada.component.css']
})

export class InformacionDetalladaComponent implements OnInit {
  dia:string="";
  busquedaDetallada:any;

  constructor(private weatherService:WeatherservicesService,private activeRouting:ActivatedRoute) {  
  }

  ngOnInit() {
    this.activeRouting.params.subscribe(({nombre})=>{
      this.weatherService.buscarDetalles(nombre).subscribe((respuesta)=>{
        this.busquedaDetallada=respuesta;
        console.log(this.busquedaDetallada)
      })
  })
  
  }

 get busqueda(){
   return this.weatherService.busqueda
 }

 convierteGrados(gradosF:Number | any){
  return (gradosF-273).toFixed(0);
}

tofixed(number:any):string{
return number.toString().substring(0,1)
}

  obtenerDia(fecha:Date):string | undefined{
    let dia="";
    let fechaDia = new Date(fecha);
    switch(fechaDia.getDay()){
      case 1:dia="Lunes";
      break;
      case 2:dia="Martes";
      break;
      case 31:dia="Miércoles";
      break;
      case 4:dia="Jueves";
      break;
      case 5:dia="Viernes";
      break;
      case 6:dia="Sábado";
      break;
      case 0:dia="Domingo";
      break;
    }
    return dia;
  }
 
}
