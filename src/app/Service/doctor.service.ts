import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Medico } from '../models/Medico';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  url = enviroment.apiURL + 'Doctor';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Listar Doctores
  public listarDoctores(): Observable<Medico[]> {
    return this.httpClient.get<Medico[]>(this.url);
  }

}
