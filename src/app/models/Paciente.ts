export class Paciente {

    id: number;
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    municipioId: number;
    municipio:{
        id: number;
        nombre: string;
    }

    constructor(id: number, nombre: string, apellido: string, fechaNacimiento: string, direccion: string, telefono: string, municipioId: number, municipio: { id: number; nombre: string; }) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.direccion = direccion;
        this.telefono = telefono;
        this.municipioId = municipioId;
        this.municipio = municipio;
    }

}