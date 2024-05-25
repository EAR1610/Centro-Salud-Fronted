export class TarjetaVacunacion {
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
    constructor(id: number, pacienteId: number, fecha: string, usuarioId: number, paciente: { id: number; nombre: string; apellido: string; }, usuario: { id: number; nombre: string; apellido: string; }) {
        this.id = id;
        this.pacienteId = pacienteId; 
        this.usuarioId = usuarioId;       
        this.fecha = fecha;        
        this.paciente = paciente;        
        this.usuario = usuario;
    }
}