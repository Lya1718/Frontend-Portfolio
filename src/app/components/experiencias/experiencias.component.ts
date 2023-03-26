import { Component, OnInit } from '@angular/core';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { Experiencia } from '../interface';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  formList: Experiencia[];
  login: boolean;

  constructor(private servicio: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencia()
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  //ID
  editForm(id: any, empresa: any, cargo: any, fecha_inicio: any, fecha_fin: any, descripcion: any) {
    this.servicio.editingId = id;
    this.servicio.editingEmpresa = empresa;
    this.servicio.editingCargo = cargo;
    this.servicio.editingFecha_Inicio = fecha_inicio;
    this.servicio.editingFecha_Fin = fecha_fin;
    this.servicio.editingDescripcion = descripcion;
  }

  //GET
  getExperiencia() {
    this.servicio.obtenerExperiencia().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  // DELETE
  deleteExperiencia(experiencia: Experiencia) {
    const result = confirm("¿Estás seguro de que quieres eliminar?");
    if (result) {
      console.log("vamos a ver que chucha pasa");
      this.servicio.borrarExperiencia(experiencia).subscribe(() => (
        this.formList = this.formList.filter( (t) => {
          return t.id !== experiencia.id
        })
      )), () => {alert("Se eliminó correctamente.")}
    }
  }
}
