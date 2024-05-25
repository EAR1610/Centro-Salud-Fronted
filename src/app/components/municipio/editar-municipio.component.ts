import { Component } from '@angular/core';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    }

    //Editar Municipio
    editarMunicipio(): void {
      const id = this.activatedRoute.snapshot.params['id'];
      this.municipioService.editarMunicipio(id,this.municipio).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/municipio']);
        }
      );
    }

}
