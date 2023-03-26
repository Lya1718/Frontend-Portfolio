import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencias-form',
  templateUrl: './experiencias-form.component.html',
  styleUrls: ['./experiencias-form.component.css']
})
export class ExperienciasFormComponent implements OnInit{
  myForm: FormGroup;
  formList:any;
  
  id = this.servicio.editingId;
  empresa = this.servicio.editingEmpresa;
  cargo = this.servicio.editingCargo;
  fecha_inicio = this.servicio.editingFecha_Inicio
  fecha_fin = this.servicio.editingFecha_Fin
  descripcion = this.servicio.editingDescripcion;

  constructor(private servicio: ExperienciaService) { }

  ngOnInit(): void {

    this.servicio.obtenerExperiencia().subscribe((data:any) =>( this.formList = data) )

    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        empresa: new FormControl(this.empresa, [Validators.required]),
        cargo: new FormControl(this.cargo, [Validators.required]),
        fecha_inicio: new FormControl(this.fecha_inicio, [Validators.required]),
        fecha_fin: new FormControl(this.fecha_fin, [Validators.required]),
        descripcion: new FormControl(this.descripcion, [Validators.required])
      }
    )
  }

  //PUT
  editExperiencia() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      
    const experiencia = {
      id: this.myForm.controls['id'].value,
      empresa: this.myForm.controls['empresa'].value,
      cargo: this.myForm.controls['cargo'].value,
      fecha_inicio: this.myForm.controls['fecha_inicio'].value,
      fecha_fin: this.myForm.controls['fecha_fin'].value,
      descripcion: this.myForm.controls['descripcion'].value
    }

    this.servicio.editarExperiencia(experiencia).subscribe(() => { alert('Se guardó correctamente') });
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
