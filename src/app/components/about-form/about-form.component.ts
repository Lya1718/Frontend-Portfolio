import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AboutService } from 'src/app/service/about.service';

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.css']
})
export class AboutFormComponent implements OnInit {
  myForm: FormGroup;
  id = this.servicio.editingId;
  nombre = this.servicio.nombre;
  apellido = this.servicio.apellido;
  sobre_mi = this.servicio.sobre_mi;
  url_perfil = this.servicio.url_perfil;
  url_portada = this.servicio.url_portada;
  url_correo = this.servicio.url_correo;
  url_github = this.servicio.url_github;

  constructor(private servicio: AboutService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id),
        nombre: new FormControl(this.nombre, [Validators.required]),
        apellido: new FormControl(this.apellido, [Validators.required]),
        sobre_mi: new FormControl(this.sobre_mi, [Validators.required]),
        url_perfil: new FormControl(this.url_perfil, [Validators.required]),
        url_portada: new FormControl(this.url_portada, [Validators.required]),
        url_correo: new FormControl(this.url_correo, [Validators.required, Validators.email]),
        url_github: new FormControl(this.url_github, [Validators.required])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //PUT
  editPersona() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      
    const persona = {
      id: this.myForm.controls['id'].value,
      nombre: this.myForm.controls['nombre'].value,
      apellido: this.myForm.controls['apellido'].value,
      sobre_mi: this.myForm.controls['sobre_mi'].value,
      url_perfil: this.myForm.controls['url_perfil'].value,
      url_portada: this.myForm.controls['url_portada'].value,
      url_correo: this.myForm.controls['url_correo'].value,
      url_github: this.myForm.controls['url_github'].value
    }

    this.servicio.editarPersona(persona).subscribe(() => { alert('Se guardó correctamente') });
    }
  }

  
  //CONEXION HTML
  get Id() {
    return this.myForm.get('id');
  }
  get Nombre() {
    return this.myForm.get('nombre');
  }
  get Apellido() {
    return this.myForm.get('apellido');
  }
  get SobreMi() {
    return this.myForm.get('sobre_mi');
  }
  get UrlPerfil() {
    return this.myForm.get('url_perfil');
  }
  get UrlPortada() {
    return this.myForm.get('url_portada');
  }
  get UrlCorreo() {
    return this.myForm.get('url_correo');
  }
  get UrlGithub() {
    return this.myForm.get('url_github');
  }

}
