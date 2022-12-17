import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  
  cambiarEstilos(){
    console.log('Click')
    document.body.classList.toggle("night-mode");
  }

}
