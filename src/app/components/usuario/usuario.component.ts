import { Component } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {

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
    this.listarUsuarios();
  }

  //Listar Usuarios
  listarUsuarios(): void {
    this.usuarioService.listarUsuario().subscribe(
      ( data: Usuario[]) => {
        this.usuario = data;
        console.log(data);
      }
    );
  }

  //Eliminar Usuario
  eliminarUsuario(id: number): void {
    this.usuarioService.eliminarUsuario(id).subscribe(
      data => {
        console.log(data);
        this.listarUsuarios();
        alert('Usuario eliminado correctamente')
      }
    );
  }

}
