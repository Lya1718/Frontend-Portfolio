import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../components/interface';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})

export class AboutService {
  editingId: any;
  nombre: any;
  apellido: any;
  sobre_mi: any;
  url_perfil: any;
  url_portada: any;
  url_correo: any;
  url_github: any;

  constructor(private service: UiService, private http:HttpClient) { }

  // GET
  obtenerPersona(): Observable<any> {
    return this.service.get('https://lourdes-ramos.onrender.com/personas/ver');
  }

  // DELETE
  borrarPersona(data: any): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/personas/delete";
    return this.service.delete(url, data);
  }

  //EDIT
  editarPersona(persona: any): Observable<any> {

    let parametros = new HttpParams();
    parametros = parametros.set('id', persona.id)
    parametros = parametros.set('nombre', persona.nombre);
    parametros = parametros.set('apellido', persona.apellido);
    parametros = parametros.set('sobre_mi', persona.sobre_mi);
    parametros = parametros.set('url_perfil', persona.url_perfil);
    parametros = parametros.set('url_portada', persona.url_portada);
    parametros = parametros.set('url_correo', persona.url_correo);
    parametros = parametros.set('url_github', persona.url_github);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: parametros
    };

    const url = "https://lourdes-ramos.onrender.com/personas/editar"
    console.log(persona)
    return this.http.put(`${url}/${persona.id}`, persona, opciones)

  }

  //POST
  crearPersona(persona: Persona): Observable<any> {
    return this.service.post("https://lourdes-ramos.onrender.com/persona/new", persona)
  }


}
