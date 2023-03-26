export class Persona {
    id: number;
    nombre: string;
    apellido: string;
    sobre_mi: string;
    url_perfil: string;
    url_portada: string;
    url_correo: string;
    url_github: string;
}

export interface Educacion {
    id?: number,
    institucion: string,
    titulo: string,
    descripcion: string
}

export interface Habilidad {
    id?: number,
    habilidad: string,
    nivel: number
}

export interface Project {
    id?: number,
    titulo: string,
    descripcion: string,
    image: string,
    link: string
}

export interface Experiencia {
    id?: number,
    empresa: string,
    cargo: string,
    fecha_inicio: string,
    fecha_fin: string,
    descripcion: string
}