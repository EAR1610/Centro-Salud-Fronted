import { Component } from '@angular/core';
import { Cita } from '../../models/Cita';
import { CitasService } from '../../Service/citas.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.css'
})
export class CitaComponent {

  cita: Cita [] = [];

  constructor(
    private citaService: CitasService
    
  ) { }

  ngOnInit(): void {
    this.listarCitas();
  }

  listarCitas() {
    this.citaService.listarCitas().subscribe(data => {
      console.log(data);
      this.cita = data;
    });
  }

  //Eliminar Cita
  eliminarCita(id: number) {
    this.citaService.eliminarCita(id).subscribe(data => {
      this.listarCitas();
    });
  }

}
