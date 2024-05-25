export class Especialidad {
    id: number;
    nombre: string;
    estado: boolean;

    constructor(id: number, nombre: string, estado: boolean) {
        this.id = id;
        this.nombre = nombre;        
        this.estado = estado;
    }
}