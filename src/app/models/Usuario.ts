export class Usuario {
    id: number;
    username: string;
    password: string;
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;

    constructor(id: number, username: string, password: string, nombre: string, apellido: string, telefono: string, direccion: string) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}