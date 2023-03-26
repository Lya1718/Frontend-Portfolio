import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.css']
})
export class EducationFormComponent implements OnInit {
  myForm: FormGroup;
  formList:any;
  
  id = this.servicio.editingId;
  titulo = this.servicio.editingTitulo;
  institucion = this.servicio.editingInstitucion;
  descripcion = this.servicio.editingDescripcion;

  constructor(private servicio: EducationService) { }

  ngOnInit(): void {

    this.servicio.obtenerEducacion().subscribe((data:any) =>( this.formList = data) )

    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        institucion: new FormControl(this.institucion, [Validators.required]),
        titulo: new FormControl(this.titulo, [Validators.required]),
        descripcion: new FormControl(this.descripcion, [Validators.required])
      }
    )
  }

  //PUT
  editEducacion() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      
    const educacion = {
      id: this.myForm.controls['id'].value,
      institucion: this.myForm.controls['institucion'].value,
      titulo: this.myForm.controls['titulo'].value,
      descripcion: this.myForm.controls['descripcion'].value
    }

    this.servicio.editarEducacion(educacion).subscribe(() => { alert('Se guardó correctamente') });
    }
  }

  //CONEXION HTML
  get formCtrl() {
    return this.myForm.controls;
  }

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
