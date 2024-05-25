import { Component } from '@angular/core';
import { Paciente } from '../../models/Paciente';
import { PacienteService } from '../../Service/paciente.service';
import { Municipio } from '../../models/Municipio';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent {

  paciente: Paciente [] = []
  nuevoPaciente: Paciente = new Paciente(0, '', '', '', '', '', 0, { id: 0, nombre: '' });
  municipios: Municipio[] = [];
     
    constructor(
      private pacienteService: PacienteService,
      private municipioService: MunicipioServiceService,
      private router : Router
    ) { }
  
    ngOnInit() {
      this.listarPacientes();
      if (!localStorage.getItem('AuthToken')) {
        this.router.navigate(['/login']);
      }
    }

    //Listar Pacientes
    listarPacientes(): void {
      this.pacienteService.listarPaciente().subscribe(
        data => {
          this.paciente = data;
          console.log(data);
        }
      );
    }

    //Eliminar Paciente
    eliminarPaciente(id: number): void {
      this.pacienteService.eliminarPaciente(id).subscribe(
        data => {
          console.log(data);
          this.listarPacientes();
        }
      );
    }

  

}
