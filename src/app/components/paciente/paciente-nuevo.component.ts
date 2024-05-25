import { Component } from '@angular/core';
import { Paciente } from '../../models/Paciente';
import { PacienteService } from '../../Service/paciente.service';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { Municipio } from '../../models/Municipio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-nuevo',
  templateUrl: './paciente-nuevo.component.html',
  styleUrl: './paciente-nuevo.component.css'
})
export class PacienteNuevoComponent {


  paciente: Paciente [] = []
  nuevoPaciente: Paciente = new Paciente(0, '', '', '', '', '', 0, { id: 0, nombre: '' });
  municipios: Municipio[] = [];
     
    constructor(
      private pacienteService: PacienteService,
      private municipioService: MunicipioServiceService,
      private router : Router
      
    ) { }
  
    ngOnInit() {
      this.listarMunicipios();
      if (!localStorage.getItem('AuthToken')) {
        this.router.navigate(['/login']);
      }
    }

  // Agregar Paciente
  agregarPaciente(): void {
    this.pacienteService.nuevoPaciente(this.nuevoPaciente).subscribe(
      paciente => {
        this.paciente.push(paciente);
        this.nuevoPaciente = new Paciente(0, '', '', '', '', '', 0, { id: 0, nombre: '' });
        console.log('Nuevo paciente agregado:', paciente);
      }
    );
  }

  //Listar Municipios
  listarMunicipios(): void {
    this.municipioService.listarMunicipip().subscribe(
      data => {
        this.municipios = data;
        console.log(data);
      }
    );
  }


}
