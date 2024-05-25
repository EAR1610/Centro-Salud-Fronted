import { Injectable } from '@angular/core';
// import { env } from 'process';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Paciente } from '../models/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  url = enviroment.apiURL + 'Paciente';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Listar Pacientes
  public listarPaciente(): Observable<Paciente[]> {
    return this.httpClient.get<Paciente[]>(this.url);
  }

  //Nuevo Paciente
  public nuevoPaciente(paciente: Paciente): Observable<Paciente> {
    return this.httpClient.post<Paciente>(this.url, paciente);
  }

  //Editar Paciente
  editarPaciente(id: number, paciente: Paciente): Observable<Paciente> {
    return this.httpClient.put<Paciente>(`${this.url}/${id}`, paciente).pipe(
      // catchError(this.handleError)
    );
  }
  //Eliminar Paciente
  eliminarPaciente(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }

  //Obtener Paciente
  obtenerPaciente(id: number): Observable<Paciente> {
    return this.httpClient.get<Paciente>(this.url + '/' + id);
  }
}
