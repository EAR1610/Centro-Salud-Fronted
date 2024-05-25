import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../Service/citas.service';
import { Cita } from '../../models/Cita';
import { Router } from '@angular/router';
import { PacienteService } from '../../Service/paciente.service';
import { Paciente } from '../../models/Paciente';
import { DoctorService } from '../../Service/doctor.service';
import { Medico } from '../../models/Medico';

@Component({
  selector: 'app-cita-nuevo',
  templateUrl: './cita-nuevo.component.html',
  styleUrl: './cita-nuevo.component.css'
})
export class CitaNuevoComponent {

  paciente: Paciente[] = [];
  doctor: Medico[] = [];
 cita: Cita = {
    id: 0,
    pacienteId: 0,
    medicoId: 0, 
    especialidadId: 0, 
    fechaHora: '',
    fechaRegistro: '',
    observaciones: '',
    estado: false, 
    paciente: {
        id: 0,
        nombre: '',
        apellido: '',
    },
    doctor: {
        id: 0,
        nombre: '',
        apellido: '',
    },
    especialidad: {
        id: 0,
        nombre: '',
        estado: false, 
    }
};


  

  constructor(
    private citasService: CitasService,
    private router: Router,
    private pacienteService: PacienteService,
    private doctorService: DoctorService,
  ) { }

  ngOnInit(): void {

    this.getPacientes();
    this.getDoctores();
  }

  //Nueva Cita
  guardarCita(): void {
    console.log(this.cita);
    this.citasService.nuevaCita(this.cita).subscribe(
      data => {
        this.cita = data;
      }
    );
  }

  //Obtener Pacientes
  getPacientes(): void {
    this.pacienteService.listarPaciente().subscribe(
      data => {
        this.paciente = data;
      }
    );
  }

  //Obtener Doctores
  getDoctores(): void {
    this.doctorService.listarDoctores().subscribe(
      data => {
        this.doctor = data;
      }
    );
  }
  

}
