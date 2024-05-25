export class Jwt {
    token: string;
    tipo: string;
    nombreUsuario: string;
    authorities: string[];

    constructor(token: string, tipo: string, nombreUsuario: string, authorities: string[]){
        this.token = token;
        this.tipo = tipo;
        this.nombreUsuario = nombreUsuario;
        this.authorities = authorities;
    }
}