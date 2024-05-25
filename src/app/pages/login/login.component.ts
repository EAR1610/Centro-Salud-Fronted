import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../models/LoginUsuario';
import { AutenticacionService } from '../../Service/autenticacion.service';
import { TokenService } from '../../Service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSignDivVisiable: boolean  = true;

  loginUsuario: LoginUsuario | undefined;
  nombreUsuario: string = '';
  emailUsuario: string = '';
  clave: string = '';

  constructor(
    private autenticacionService: AutenticacionService,
    private tokenService: TokenService,
    private router: Router
  ){ }

  ngOnInit(): void {
    
  }

  login(): void {    
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.clave);
    console.log(this.loginUsuario);
    this.autenticacionService.login(this.loginUsuario).subscribe(data => {
      this.tokenService.setToken(data.token);         
      this.router.navigate(['/dashboard']);
      const usuario = this.tokenService.getDecodedToken(data.token);
      localStorage.setItem('usuario', JSON.stringify(usuario));      
    }, err => {
      alert('Error al autenticar');
    });
  }

  onRegister(): void {
    console.log("CREANDO CUENTA");
  }
}

export class SignUpModel  {
  name: string;
  email: string;
  password: string;

  constructor() {
    this.email = "";
    this.name = "";
    this.password= ""
  }
}

export class LoginModel  { 
  email: string;
  password: string;

  constructor() {
    this.email = ""; 
    this.password= ""
  }
}
