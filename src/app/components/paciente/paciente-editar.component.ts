import { Component } from '@angular/core';
import { Paciente } from '../../models/Paciente';
import { Municipio } from '../../models/Municipio';
import { PacienteService } from '../../Service/paciente.service';
import { MunicipioServiceService } from '../../Service/municipio.service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paciente-editar',
  templateUrl: './paciente-editar.component.html',
  styleUrl: './paciente-editar.component.css'
})
export class PacienteEditarComponent {

  paciente: Paciente = {
    id: 0,
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    direccion: '',
    telefono: '',
    municipioId: 0,
    municipio: { id: 0, nombre: '' }
  };
  municipios: Municipio[] = [];

  constructor(
    private pacienteService: PacienteService,
    private municipioService: MunicipioServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
    this.listarMunicipios();
    this.obtenerPaciente();
  }

  listarMunicipios(): void {
    this.municipioService.listarMunicipip().subscribe(
      data => {
        this.municipios = data;
        console.log(data);
      },
      error => {
        console.error('Error al listar municipios', error);
      }
    );
  }

   // Editar Paciente
   editarPaciente(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.paciente.id = id; // Asegurarse de que el ID del paciente en el cuerpo coincida con el ID en la URL
    this.paciente.municipioId = Number(this.paciente.municipioId);

    if (id !== 0 && !isNaN(this.paciente.municipioId)) {
      this.pacienteService.editarPaciente(id, this.paciente).subscribe(
        paciente => {
          console.log('Paciente editado:', paciente);
          this.router.navigate(['/paciente']); // Redirigir a la lista de pacientes o mostrar un mensaje de éxito
        },
        error => {
          console.error('Error al editar el paciente', error);
          alert('Error al editar el paciente: ' + error.message);
        }
      );
    } else {
      alert('ID de paciente inválido o municipioId no es un número válido.');
    }
  }

  obtenerPaciente(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.pacienteService.obtenerPaciente(id).subscribe(
      data => {
        this.paciente = data;
      }
    );
  }

}
