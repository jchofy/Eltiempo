import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Weather } from '../interface/weather';
import { WeatherDetalles } from '../interface/weatherDetalles';
import { WeatherservicesService } from '../services/weather.service';

@Component({
  selector: 'app-informacion-detallada',
  templateUrl: './informacion-detallada.component.html',
  styleUrls: ['./informacion-detallada.component.css']
})

export class InformacionDetalladaComponent implements OnInit {

  dia:string="";
  busquedaDetallada!:WeatherDetalles;
  busquedaDetalladaPrimerDia: any[]=[];
  busquedaDetalladaSegundoDia: any[]=[];
  busquedaDetalladaTercerDia: any[]=[];
  busquedaDetalladaCuartoDia: any[]=[];



  constructor(private weatherService:WeatherservicesService,private activeRouting:ActivatedRoute) {  
  }
  

establecerHoratabla(){
  let  vecesPrimerdia;
  let numero = parseInt((this.busquedaDetallada.list[0].dt_txt).toString().substring(11,13));
  vecesPrimerdia=((24-numero)/3);
  this.busquedaDetalladaPrimerDia = this.busquedaDetallada.list.slice(0,vecesPrimerdia);
  this.busquedaDetalladaSegundoDia = this.busquedaDetallada.list.slice(vecesPrimerdia,vecesPrimerdia+8);
  this.busquedaDetalladaTercerDia = this.busquedaDetallada.list.slice(vecesPrimerdia+8,vecesPrimerdia+16);
  this.busquedaDetalladaCuartoDia = this.busquedaDetallada.list.slice(vecesPrimerdia+16,vecesPrimerdia+24);

}

cambiaImagen(numero:string):string{
  let cadena = "../../../assets/Iconos/"+numero+".png";
  return cadena;
}


  ngOnInit() {
    this.activeRouting.params.subscribe(({nombre})=>{
      this.weatherService.buscarDetalles(nombre).subscribe((respuesta)=>{
        this.busquedaDetallada=respuesta;
        this.establecerHoratabla();
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

  obtenerDia():string | undefined{
    let dia="";
    let fechaDia = new Date();
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
