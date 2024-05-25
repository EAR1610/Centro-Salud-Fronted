import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../Service/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent {

  usuario: any = {
    id: 0,
    nombre: '',
    apellido: '',
    correo: '',
    telefono: '',
    direccion: '',
    password: ''
  }

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    if (!localStorage.getItem('AuthToken')) {
      this.router.navigate(['/login']);
    }
    this.obtenerUsuario();
  }

  //Obtener Usuario
  obtenerUsuario(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.obtenerUsuario(id).subscribe(
      data => {
        this.usuario = data;
      }
    )
  }

  //Editar Usuario
  editarUsuario(): void {
    console.log(this.usuario);
    const id = this.activatedRoute.snapshot.params['id'];
    this.usuarioService.editarUsuario(id, this.usuario).subscribe(
      data => {
        this.router.navigate(['/usuario']);
      }
    )
  }
}