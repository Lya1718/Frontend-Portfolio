import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills-form',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.css']
})
export class SkillsFormComponent implements OnInit {
  myForm: FormGroup;
  id = this.servicio.editingId;
  habilidad = this.servicio.editingHabilidad;
  nivel = this.servicio.editingNivel;
  formList:any;

  constructor(private servicio: SkillsService) { }

  ngOnInit(): void {
    this.servicio.obtenerHabilidad().subscribe((data: any) => { this.formList = data; console.log(data); })
    this.myForm = new FormGroup(
      {
        id: new FormControl(this.id, [Validators.required]),
        habilidad: new FormControl(this.habilidad, [Validators.required]),
        nivel: new FormControl(this.nivel, [Validators.required, Validators.maxLength(3)])
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

  //PUT
  editSkill() {
    if (this.myForm.invalid) {
      return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
    } else {
      
    const skills = {
      id: this.myForm.controls['id'].value,
      habilidad: this.myForm.controls['habilidad'].value,
      nivel: this.myForm.controls['nivel'].value
    }

    this.servicio.editarHabilidad(skills).subscribe(() => { alert('Se guardó correctamente') });
    }
  }

  //CONEXION HTML
  get Id() {
    return this.myForm.get('id');
  }
  get Habilidad() {
    return this.myForm.get('habilidad');
  }
  get Nivel() {
    return this.myForm.get('nivel');
  }

}