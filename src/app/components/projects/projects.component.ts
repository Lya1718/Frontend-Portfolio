import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/projects.service';
import { Project } from '../interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  formList: Project[];
  login: boolean;

  constructor(private servicio: ProjectsService) { 
    this.getProject()
  }

  ngOnInit(): void {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  //ID
  editForm(id: any, titulo: any, descripcion: any, image: any, link: any) {
    this.servicio.editingId = id;
    this.servicio.editingTitulo = titulo;
    this.servicio.editingDescripcion = descripcion;
    this.servicio.editingImage = image;
  }

  //GET
  getProject() {
    this.servicio.obtenerProyecto().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  // DELETE
  deleteProject(project: Project) {
    const result = confirm("¿Estás seguro de que quieres eliminar?");
    if (result) {
      console.log("vamos a ver que chucha pasa");
      this.servicio.borrarProyecto(project).subscribe(() => (
        this.formList = this.formList.filter( (t) => {
          return t.id !== project.id
        })
      )), () => { alert("Se eliminó correctamente."); }
    }
  }
}
