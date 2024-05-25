import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from '../../Service/token.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  nombreUsuario: string = '';  
  
  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    const authToken = this.tokenService.getToken();
    console.log(authToken)
    if (!authToken) {
      this.router.navigate(['/login']);
    }else {
      const usuario = this.tokenService.getDecodedToken(authToken);
      this.nombreUsuario = usuario.uniqueName;
      console.log(this.nombreUsuario);
    }
  }

  onLogout(): void {
    this.tokenService.logOut();
  }
}
