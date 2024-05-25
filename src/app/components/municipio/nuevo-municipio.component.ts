import { Component } from '@angular/core';
import { Municipio } from '../../models/Municipio';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-municipio',
  templateUrl: './nuevo-municipio.component.html',
  styleUrl: './nuevo-municipio.component.css'
})
export class NuevoMunicipioComponent {

  //creamos un objeto de tipo municipio
  municipio: Municipio = {
    id: 0,
    nombre: ''
  }

  constructor(
    private municipioService: MunicipioServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
  }

  //Guardar Municipio
  guardarMunicipio(): void {
    this.municipioService.nuevoMunicipio(this.municipio).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/municipio']);
      }
    );
  }

}
