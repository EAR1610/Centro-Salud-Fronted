export class Vacuna {
    id: number;
    nombre: string;
    descripcion: string;
    dosis: number;
    edadMinima: number;
    edadMaxima: number;

    constructor(id: number, nombre: string, descripcion: string, estado: boolean, dosis: number, edadMinima: number, edadMaxima: number) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.dosis = dosis;
        this.edadMinima = edadMinima;
        this.edadMaxima = edadMaxima;
    }
}