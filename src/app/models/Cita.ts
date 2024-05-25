export class Cita {
    id: number;
    pacienteId: number;
    medicoId: number;
    especialidadId: number;
    fechaHora: string;
    fechaRegistro: string;
    observaciones: string;
    estado: boolean;
    paciente: {
        id: number;
        nombre: string;
        apellido: string;
    };
    doctor: {
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
        this.fechaHora = fecha;
        this.fechaRegistro = hora;
        this.observaciones = descripcion;
        this.estado = estado;
        this.paciente = paciente;
        this.doctor = medico;
        this.especialidad = especialidad;
    }
}