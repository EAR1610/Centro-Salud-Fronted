import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
  }

}
