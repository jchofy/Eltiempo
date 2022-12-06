import { Component, OnInit } from '@angular/core';
import { WeatherservicesService } from '../services/weather.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {

  busquedasPueblos:any[]=[];
  constructor(private weatherService:WeatherservicesService) {  
  }

  get busqueda(){
    return this.weatherService.busqueda;
  }
  
  ngOnInit(): void {
    this.cargadatos()
  }

  convierteGrados(gradosF:Number | any){
    return (gradosF-273).toFixed(2);
  }

  cargadatos(){
    this.weatherService.buscar("Martos").subscribe((respuesta:any)=>{ 
      this.busquedasPueblos.push(respuesta);
     });
     this.weatherService.buscar("Los villares").subscribe((respuesta:any)=>{ 
      this.busquedasPueblos.push(respuesta);
     });
     this.weatherService.buscar("TorreDelcampo").subscribe((respuesta:any)=>{ 
      this.busquedasPueblos.push(respuesta);
     });
     this.weatherService.buscar("Jaen").subscribe((respuesta:any)=>{ 
      this.busquedasPueblos.push(respuesta);
     });
  }

  obtenerFecha(){
    let fecha:Date = new Date();
    return fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear()+" "+fecha.getHours()+":" +fecha.getMinutes()
  }

}
