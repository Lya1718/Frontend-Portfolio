import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Habilidad } from '../components/interface';
import { UiService } from './ui.service';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  editingId: any;
  editingHabilidad: any;
  editingNivel: any;

  constructor(private service: UiService, private http: HttpClient) {}

  // GET
  obtenerHabilidad(): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/habilidades/ver";
    return this.service.get(url);
  }

  // DELETE
  borrarHabilidad(data: any): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/habilidades/delete";
    return this.service.delete(url, data);
  }

  //EDIT
  editarHabilidad(habilidades: any): Observable<any> {

    let parametros = new HttpParams();
    parametros = parametros.set('id', habilidades.id)
    parametros = parametros.set('habilidad', habilidades.habilidad);
    parametros = parametros.set('nivel', habilidades.nivel);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: parametros
    };

    const url = "https://lourdes-ramos.onrender.com/habilidades/editar"
    console.log(habilidades)
    return this.http.put(`${url}/${habilidades.id}`, habilidades, opciones)

  }

  //POST
  crearHabilidad(habilidad: Habilidad): Observable<any> {
    return this.service.post("https://lourdes-ramos.onrender.com/habilidades/new", habilidad)
  }

}
