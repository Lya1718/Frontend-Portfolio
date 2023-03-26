import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { Persona } from '../interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  formList: Persona[];
  login: boolean;

  constructor(private servicio: AboutService) { }

  ngOnInit(): void {
    this.getPersonas()
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  //ID
  editForm(id: any, nombre: any, apellido: any, sobre_mi: any, url_perfil: any,
    url_portada: any, url_correo: any, url_github: any) {
    this.servicio.editingId = id;
    this.servicio.nombre = nombre;
    this.servicio.apellido = apellido;
    this.servicio.sobre_mi = sobre_mi;
    this.servicio.url_perfil = url_perfil;
    this.servicio.url_portada = url_portada;
    this.servicio.url_correo = url_correo;
    this.servicio.url_github = url_github;
  }

  //GET
  getPersonas() {
    this.servicio.obtenerPersona().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  // DELETE
  deletePersona(persona: Persona) {
    const result = confirm("¿Estás seguro de que quieres eliminar?");
    if (result) {
      console.log("vamos a ver que chucha pasa");
      this.servicio.borrarPersona(persona).subscribe(() => { alert("Se eliminó correctamente."); })
    }
  }

}

