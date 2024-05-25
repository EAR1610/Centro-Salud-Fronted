import { Especialidad } from "./Especialidad";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita {
    id: number;
    pacienteId: number;
    doctorId: number;
    usuarioId: number;
    fechaHora: string;
    fechaRegistro: string;
    observaciones: string;
    estado: boolean;
    especialidadId?: number; // add this line
    paciente?: Paciente; // add this line
    doctor?: Medico; // add this line
    especialidad?: Especialidad; // add this line

    //Constructor
    constructor(id: number, pacienteId: number, doctorId: number, usuarioId: number, fechaHora: string, fechaRegistro: string, observaciones: string, estado: boolean, especialidadId: number, paciente: Paciente, doctor: Medico, especialidad: Especialidad) {
        this.id = id;
        this.pacienteId = pacienteId;
        this.doctorId = doctorId;
        this.usuarioId = usuarioId;
        this.fechaHora = fechaHora;
        this.fechaRegistro = fechaRegistro;
        this.observaciones = observaciones;
        this.estado = estado;
        this.especialidadId = especialidadId;
        this.paciente = paciente;
        this.doctor = doctor;
        this.especialidad = especialidad;
    }
}