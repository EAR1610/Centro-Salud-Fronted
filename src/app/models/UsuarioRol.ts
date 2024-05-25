export class UsuarioRol {
    id: number;
    usuarioId: number;
    rolId: number;
    usuario: {
        id: number;
        username: string;
        password: string;
        nombre: string;
        apellido: string;
        telefono: string;
        direccion: string;
    };
    rol: {
        id: number;
        nombre: string;
    };

    constructor(id: number, usuarioId: number, rolId: number, usuario: { id: number; username: string; password: string; nombre: string; apellido: string; telefono: string; direccion: string; }, rol: { id: number; nombre: string; }) {
        this.id = id;
        this.usuarioId = usuarioId;
        this.rolId = rolId;
        this.usuario = usuario;
        this.rol = rol;
    }
}