import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias-form-add',
  templateUrl: './experiencias-form-add.component.html',
  styleUrls: ['./experiencias-form-add.component.css']
})
export class ExperienciasFormAddComponent implements OnInit{
  myForm: FormGroup;

  constructor(private servicio: ExperienciaService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        empresa: new FormControl('', [Validators.required]),
        cargo: new FormControl('', [Validators.required]),
        fecha_inicio: new FormControl('', [Validators.required]),
        fecha_fin: new FormControl('', [Validators.required]),
        descripcion: new FormControl('', [Validators.required])
      }
    )
  }

  //POST
  saveExperiencia() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      this.servicio.crearExperiencia(this.myForm.value).subscribe(() => { alert("Se creó correctamente"); })
    }
  }

  //CONEXION HTML
  get formCtrl() {
    return this.myForm.controls;
  }

  get Id() {
    return this.myForm.get('id');
  }
  get Empresa() {
    return this.myForm.get('empresa');
  }
  get Cargo() {
    return this.myForm.get('cargo');
  }
  get Fecha_Inicio() {
    return this.myForm.get('fecha_inicio');
  }
  get Fecha_Fin() {
    return this.myForm.get('fecha_fin');
  }
  get Descripcion() {
    return this.myForm.get('descripcion');
  }


}
