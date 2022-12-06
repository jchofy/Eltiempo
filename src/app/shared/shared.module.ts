import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import {InputSwitchModule} from 'primeng/inputswitch';




@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputSwitchModule
  ],exports:[NavBarComponent]
})
export class SharedModule { }
