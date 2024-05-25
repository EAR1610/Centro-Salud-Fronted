import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Service/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css'
})
export class NuevoUsuarioComponent {
  usuario: Usuario[] = [];
  nuevoUsuario: Usuario = new Usuario(0, '', '', '', '', '', '');

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }    
  }
  
  // Agregar Usuario
  agregarUsuario(): void {
    this.usuarioService.nuevoUsuario(this.nuevoUsuario).subscribe(
      usuario => {
        this.usuario.push(usuario);
        this.nuevoUsuario = new Usuario(0, '', '', '', '', '', '');        
        Swal.fire("Usuario creado correctamente");
        this.router.navigate(['/usuario']);
      }
    );
  }
}
