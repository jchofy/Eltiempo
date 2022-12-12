import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InformacionDetalladaComponent } from './informacion-detallada/informacion-detallada.component';
import { ResultadosComponent } from './resultados/resultados.component';
import { SharedModule } from '../shared/shared.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CarouselModule} from 'primeng/carousel';



@NgModule({
  declarations: [
    BusquedaComponent,
    MainPageComponent,
    InformacionDetalladaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InputTextModule,
    ButtonModule,
    CarouselModule
  ],exports:[
    MainPageComponent
  ]
})
export class WeatherModule { }
