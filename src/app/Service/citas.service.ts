import { Injectable } from '@angular/core';
import { env } from 'process';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cita } from '../models/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = enviroment.apiURL + 'Cita';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Listar Citas
  public listarCitas(): Observable<Cita[]> {
    return this.httpClient.get<Cita[]>(this.url);
  }

  //Nueva Cita
  public nuevaCita(cita: Cita): Observable<Cita> {
    return this.httpClient.post<Cita>(this.url, cita);
  }

  //Editar Cita
  editarCita(id: number, cita: Cita): Observable<Cita> {
    return this.httpClient.put<Cita>(`${this.url}/${id}`, cita);
  }

  //Eliminar Cita
  eliminarCita(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
