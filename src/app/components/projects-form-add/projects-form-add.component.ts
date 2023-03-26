import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'app-projects-form-add',
  templateUrl: './projects-form-add.component.html',
  styleUrls: ['./projects-form-add.component.css']
})
export class ProjectsFormAddComponent {
  myForm: FormGroup;

  constructor(private servicio: ProjectsService) { }

  ngOnInit(): void { 
    this.myForm = new FormGroup(
      {
        id: new FormControl(''),
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        link: new FormControl('', [Validators.required])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //POST
  saveProject() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      this.servicio.crearProyecto(this.myForm.value).subscribe(() => { alert("Se creó correctamente"); })
    }
  }


  //CONEXION HTML

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
