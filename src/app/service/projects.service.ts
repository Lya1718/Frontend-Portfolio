import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../components/interface';
import { UiService } from './ui.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  editingId: any;
  editingTitulo: any;
  editingDescripcion: any;
  editingImage: any;
  editingLink: any;

  constructor(private service:UiService, private http:HttpClient) { }

  // GET
  obtenerProyecto():Observable<any>{
    const url = "https://lourdes-ramos.onrender.com/proyectos/ver";
    return this.service.get(url);  
  }

  // DELETE
  borrarProyecto(data: any): Observable<any> {
    const url = "https://lourdes-ramos.onrender.com/proyectos/delete";
    return this.service.delete(url, data);
  }

  //EDIT
  editarProyectos(proyecto: any): Observable<any> {

    let parametros = new HttpParams();
    parametros = parametros.set('id', proyecto.id)
    parametros = parametros.set('titulo', proyecto.titulo);
    parametros = parametros.set('descripcion', proyecto.descripcion);
    parametros = parametros.set('image', proyecto.image);
    parametros = parametros.set('link', proyecto.link);

    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      params: parametros
    };

    const url = "https://lourdes-ramos.onrender.com/proyectos/editar"
    console.log(proyecto)
    return this.http.put(`${url}/${proyecto.id}`, proyecto, opciones)

  }

  //POST
  crearProyecto(proyecto: Project):Observable<any>{
    return this.service.post("https://lourdes-ramos.onrender.com/proyectos/new", proyecto)
  }

}
