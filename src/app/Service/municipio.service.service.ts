import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Municipio } from '../models/Municipio';

@Injectable({
  providedIn: 'root'
})
export class MunicipioServiceService {

  muncipioUrl = enviroment.apiURL + 'Municipio';

  constructor(private httpClient: HttpClient) { }

  public listarMunicipip(): Observable<Municipio[]> {
    return this.httpClient.get<Municipio[]>(this.muncipioUrl).pipe(
      // catchError(this.handleError)
    );
  }

  //Nuevo Municipio
  public nuevoMunicipio(municipio: Municipio): Observable<Municipio> {
    return this.httpClient.post<Municipio>(this.muncipioUrl, municipio).pipe(
      // catchError(this.handleError)
    );
  }


  editarMunicipio(id: number,municipio: Municipio): Observable<Municipio> {
    return this.httpClient.put<Municipio>(this.muncipioUrl + '/' + id, municipio).pipe(
      // catchError(this.handleError)
    ); 
  }

  //Eliminar Municipio
  eliminarMunicipio(id: number): Observable<any> {
    return this.httpClient.delete(this.muncipioUrl + '/' + id).pipe(
      // catchError(this.handleError)
    );
  }

  //Obtener Municipio
  obtenerMunicipio(id: number): Observable<Municipio> {
    return this.httpClient.get<Municipio>(this.muncipioUrl + '/' + id).pipe(
      // catchError(this.handleError)
    );
  }
  
}
