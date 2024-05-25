import { Component } from '@angular/core';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-municipio',
  templateUrl: './editar-municipio.component.html',
  styleUrl: './editar-municipio.component.css'
})
export class EditarMunicipioComponent {

    //creamos un objeto de tipo municipio
    municipio: any = {
      id: 0,
      nombre: ''
    }
  
    constructor(
      private municipioService: MunicipioServiceService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { }
  
    ngOnInit() {
      if (!localStorage.getItem('AuthToken')) {
        this.router.navigate(['/login']);
      }
      this.obtenerMunicipio();
    }

    //Obtener Municipio
    obtenerMunicipio(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.municipioService.obtenerMunicipio(id).subscribe(
        data => {
          this.municipio = data;
        }
      );
    }

    //Editar Municipio
    editarMunicipio(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.municipioService.editarMunicipio(id,this.municipio).subscribe(
        data => {
          Swal.fire("Municipio editado correctamente");
          this.router.navigate(['/municipio']);
        }
      );
    }

}
