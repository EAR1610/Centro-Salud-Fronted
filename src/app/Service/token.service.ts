import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private router: Router
  ) { }

  //Guarda el token en el local storage
  public setToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
      return localStorage.getItem(TOKEN_KEY) || '';
  }

  public getDecodedToken(token: string): any {
    const payload = token.split('.')[1];
    const payloadDecoded = atob(payload);
    const values = JSON.parse(payloadDecoded);
    const uniqueName = values.unique_name;
    const roles = values.role;

    return { uniqueName, roles };
  }

  public logOut(): void {
    window.localStorage.clear();
    this.router.navigate(['/']);
  }
}
