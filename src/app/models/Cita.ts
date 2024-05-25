export class Cita {
    id: number;
    pacienteId: number;
    medicoId: number;
    especialidadId: number;
    fecha: string;
    hora: string;
    descripcion: string;
    estado: boolean;
    paciente: {
        id: number;
        nombre: string;
        apellido: string;
    };
    medico: {
        id: number;
        nombre: string;
        apellido: string;
    };
    especialidad: {
        id: number;
        nombre: string;
        estado: boolean;
    }

    constructor(id: number, pacienteId: number, medicoId: number, fecha: string, hora: string, descripcion: string, estado: boolean, paciente: { id: number; nombre: string; apellido: string; }, medico: { id: number; nombre: string; apellido: string; }, especialidadId: number, especialidad: { id: number; nombre: string; estado: boolean; }) {
        this.id = id;
        this.pacienteId = pacienteId;
        this.medicoId = medicoId;
        this.especialidadId = especialidadId;
        this.fecha = fecha;
        this.hora = hora;
        this.descripcion = descripcion;
        this.estado = estado;
        this.paciente = paciente;
        this.medico = medico;
        this.especialidad = especialidad;
    }
}