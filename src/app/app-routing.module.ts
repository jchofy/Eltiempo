import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionDetalladaComponent } from './weather/informacion-detallada/informacion-detallada.component';
import { MainPageComponent } from './weather/main-page/main-page.component';

const routes: Routes = [
  {
    path:"",
    component:MainPageComponent
  },
  {
    path:"informaciondetallada",
    component:InformacionDetalladaComponent
  },
  {
    path:"informaciondetallada/:nombre",
    component:InformacionDetalladaComponent
  },
  {
    path:"**",
    redirectTo:""
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
