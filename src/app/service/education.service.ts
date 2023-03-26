import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../components/interface';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  editingId: any;
  editingInstitucion: any;
  editingTitulo: any;
  editingDescripcion: any;

  constructor(private service: UiService, private http: HttpClient) { }

  // GET
  obtenerEducacion(): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/educacion/ver";
    return this.service.get(url);
  }

  // DELETE
  borrarEducacion(data: any): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/educacion/delete";
    return this.service.delete(url, data);
  }

  //EDIT
  editarEducacion(educacion: any): Observable<any> {

    let parametros = new HttpParams();
    parametros = parametros.set('id', educacion.id)
    parametros = parametros.set('institucion', educacion.institucion);
    parametros = parametros.set('titulo', educacion.titulo);
    parametros = parametros.set('descripcion', educacion.descripcion);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: parametros
    };

    const url = "https://lourdes-ramos.onrender.com/educacion/editar"
    console.log(educacion)
    return this.http.put(`${url}/${educacion.id}`, educacion, opciones)

  }

  //POST
  crearEducacion(educacion: Educacion): Observable<any> {
    return this.service.post("https://lourdes-ramos.onrender.com/educacion/new", educacion)
  }
}
