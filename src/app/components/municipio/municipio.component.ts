import { Component } from '@angular/core';
import { Municipio } from '../../models/Municipio';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrl: './municipio.component.css'
})
export class MunicipioComponent {

  municipio: Municipio [] = []

  constructor(
    private municipioService: MunicipioServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
    this.listarMunicipios();
  }

  //Listar Municipios
  listarMunicipios(): void {
    this.municipioService.listarMunicipip().subscribe(
      data => {
        this.municipio = data;
        console.log(data);
      }
    );
  }

  //Eliminar Municipio
  eliminarMunicipio(id: number): void {
    this.municipioService.eliminarMunicipio(id).subscribe(
      data => {
        Swal.fire("Municipio eliminado correctamente");
        this.listarMunicipios();
      }
    );
  }

}
