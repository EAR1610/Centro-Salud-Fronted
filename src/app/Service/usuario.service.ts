import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = enviroment.apiURL + 'Usuario';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Listar Usuarios
  public listarUsuario(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(this.url);
  }

  //Obtener Usuario
  public obtenerUsuario(id: number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(this.url + '/' + id);
  }

  //Nuevo Usuario
  public nuevoUsuario(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.url, usuario);
  }

  //Editar Usuario
  editarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.url}/${id}`, usuario).pipe(
      // catchError(this.handleError)
    );
  }

  //Eliminar Usuario
  eliminarUsuario(id: number): Observable<any> {
    return this.httpClient.delete(this.url + '/' + id);
  }
}
