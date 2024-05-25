import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacuna',
  templateUrl: './vacuna.component.html',
  styleUrl: './vacuna.component.css'
})
export class VacunaComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
  }

}
