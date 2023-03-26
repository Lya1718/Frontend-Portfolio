import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../components/interface';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  editingId: any;
  editingEmpresa: any;
  editingCargo: any;
  editingFecha_Inicio: any;
  editingFecha_Fin: any;
  editingDescripcion: any;

  constructor(private service: UiService, private http: HttpClient) { }

  // GET
  obtenerExperiencia(): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/experiencias/ver";
    return this.service.get(url);
  }

  // DELETE
  borrarExperiencia(data: any): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/experiencias/delete";
    return this.service.delete(url, data);
  }

  //EDIT
  editarExperiencia(experiencias: any): Observable<any> {

    let parametros = new HttpParams();
    parametros = parametros.set('id', experiencias.id)
    parametros = parametros.set('empresa', experiencias.empresa);
    parametros = parametros.set('cargo', experiencias.cargo);
    parametros = parametros.set('fecha_inicio', experiencias.fecha_inicio);
    parametros = parametros.set('fecha_fin', experiencias.fecha_fin);
    parametros = parametros.set('descripcion', experiencias.descripcion);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: parametros
    };

    const url = "https://lourdes-ramos.onrender.com/experiencias/editar"
    console.log(experiencias)
    return this.http.put(`${url}/${experiencias.id}`, experiencias, opciones)

  }

  //POST
  crearExperiencia(experiencia: Experiencia): Observable<any> {
    return this.service.post("https://lourdes-ramos.onrender.com/experiencias/new", experiencia)
  }
}
