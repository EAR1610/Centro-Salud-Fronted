export class MedicoEspecialidad {
    id: number;
    medicoId: number;
    especialidadId: number;
    medico: {
        id: number;
        nombre: string;
        apellido: string;
        fechaNacimiento: string;
        direccion: string;
        telefono: string;
        municipioId: number;
        municipio: {
            id: number;
            nombre: string;
        }
    };
    especialidad: {
        id: number;
        nombre: string;
        estado: boolean;
    };

    constructor(id: number, medicoId: number, especialidadId: number, medico: { id: number; nombre: string; apellido: string; fechaNacimiento: string; direccion: string; telefono: string; municipioId: number; municipio: { id: number; nombre: string; } }, especialidad: { id: number; nombre: string; estado: boolean; }) {
        this.id = id;
        this.medicoId = medicoId;
        this.especialidadId = especialidadId;
        this.medico = medico;
        this.especialidad = especialidad;
    }
}