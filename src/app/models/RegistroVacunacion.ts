export class RegistroVacunacion {
    id: number;
    tarjetaVacunacionId: number;
    vacunaId: number;
    proximaVacunaId: number;
    fecha: string;
    tarjetaVacunacion: {
        id: number;
        pacienteId: number;
        fecha: string;
        usuarioId: number;
        paciente: {
            id: number;
            nombre: string;
            apellido: string;
        };
        usuario: {
            id: number;
            nombre: string;
            apellido: string;
        };
    };
    vacuna: {
        id: number;
        nombre: string;
        descripcion: string;
        dosis: number;
        edadMinima: number;
        edadMaxima: number;
    };
    proximaVacuna: {
        id: number;
        nombre: string;
        descripcion: string;
        dosis: number;
        edadMinima: number;
        edadMaxima: number;
    };
    constructor(id: number, tarjetaVacunacionId: number, vacunaId: number, dosis: number, fecha: string, tarjetaVacunacion: { id: number; pacienteId: number; fecha: string; usuarioId: number; paciente: { id: number; nombre: string; apellido: string; }; usuario: { id: number; nombre: string; apellido: string; }; }, vacuna: { id: number; nombre: string; descripcion: string; dosis: number; edadMinima: number; edadMaxima: number; }) {
        this.id = id;
        this.tarjetaVacunacionId = tarjetaVacunacionId;
        this.vacunaId = vacunaId;
        this.proximaVacunaId = vacunaId + 1;        
        this.fecha = fecha;
        this.tarjetaVacunacion = tarjetaVacunacion;
        this.vacuna = vacuna;
        this.proximaVacuna = vacuna;
    }
}