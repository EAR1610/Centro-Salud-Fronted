import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
  }
}
