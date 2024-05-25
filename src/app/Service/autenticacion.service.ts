import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../enviroment/enviroment';
import { Jwt } from '../models/Jwt';
import { Observable } from 'rxjs/internal/Observable';
import { LoginUsuario } from '../models/LoginUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url = enviroment.apiURL + 'Auth/Autenticar';

  constructor(
    private httpClient: HttpClient
  ) { }

  //Login
  public login(LoginUsuario: LoginUsuario): Observable<Jwt> {
    return this.httpClient.post<Jwt>(this.url, LoginUsuario);
  }
}
