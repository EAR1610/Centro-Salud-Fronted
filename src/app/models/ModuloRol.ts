export class ModuloRol {
    id: number;
    moduloId: number;
    rolId: number;
    modulo: {
        id: number;
        nombre: string;
        descripcion: string;
    };
    rol: {
        id: number;
        nombre: string;
    };

    constructor(id: number, moduloId: number, rolId: number, modulo: { id: number; nombre: string; descripcion: string; }, rol: { id: number; nombre: string; }) {
        this.id = id;
        this.moduloId = moduloId;
        this.rolId = rolId;
        this.modulo = modulo;
        this.rol = rol;
    }
}