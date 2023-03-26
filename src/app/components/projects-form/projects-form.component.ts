import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent implements OnInit {
  myForm: FormGroup;
  id = this.servicio.editingId;
  titulo = this.servicio.editingTitulo;
  descripcion = this.servicio.editingDescripcion;
  image = this.servicio.editingImage;
  link = this.servicio.editingLink;


  constructor(private servicio: ProjectsService) { }

  ngOnInit(): void { 
    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        titulo: new FormControl(this.titulo, [Validators.required]),
        descripcion: new FormControl(this.descripcion, [Validators.required]),
        image: new FormControl(this.image, [Validators.required]),
        link: new FormControl(this.link, [Validators.required])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //PUT
  editProyect() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      
    const proyectos = {
      id: this.myForm.controls['id'].value,
      titulo: this.myForm.controls['titulo'].value,
      descripcion: this.myForm.controls['descripcion'].value,
      image: this.myForm.controls['image'].value,
      link: this.myForm.controls['link'].value
    }

    this.servicio.editarProyectos(proyectos).subscribe(() => { alert('Se guardó correctamente') });
    }
  }

  //CONEXION HTML
  get Id() {
    return this.myForm.get('id');
  }

  get Titulo() {
    return this.myForm.get('titulo');
  }

  get Descripcion() {
    return this.myForm.get('descripcion');
  }

  get Image() {
    return this.myForm.get('image');
  }

  get Link() {
    return this.myForm.get('link');
  }
}
