import { Component } from '@angular/core';

@Component({
  selector: 'app-pagini',
  templateUrl: './pagini.component.html',
  styleUrl: './pagini.component.css'
})
export class PaginiComponent {
  sidebarVisible: boolean = false; 
  
  closeCallback(event: any) {
    // Lógica para cerrar la página aquí
    this.sidebarVisible = false;
  }
}
