import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-form-add',
  templateUrl: './education-form-add.component.html',
  styleUrls: ['./education-form-add.component.css']
})
export class EducationFormAddComponent implements OnInit {
  myForm: FormGroup;

  constructor(private servicio: EducationService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        institucion: new FormControl('', [Validators.required]),
        titulo: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required])
      }
    )
  }

  //POST
  saveEducacion() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      this.servicio.crearEducacion(this.myForm.value).subscribe(() => { alert("Se creó correctamente"); })
    }
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //CONEXION HTML
  get Id() {
    return this.myForm.get('id');
  }
  get Institucion() {
    return this.myForm.get('institucion');
  }
  get Titulo() {
    return this.myForm.get('titulo');
  }
  get Descripcion() {
    return this.myForm.get('descripcion');
  }
}
