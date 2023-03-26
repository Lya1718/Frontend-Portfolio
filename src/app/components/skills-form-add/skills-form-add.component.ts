import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/service/skills.service';

@Component({
  selector: 'app-skills-form-add',
  templateUrl: './skills-form-add.component.html',
  styleUrls: ['./skills-form-add.component.css']
})
export class SkillsFormAddComponent {
  myForm: FormGroup;

  constructor(private servicio: SkillsService) { }

  ngOnInit(): void {
    this.myForm = new FormGroup(
      {
        id: new FormControl(''),
        habilidad: new FormControl('', [Validators.required]),
        nivel: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      }
    )
  }

  get formCtrl() {
    return this.myForm.controls;
  }

 //POST
 saveSkill() {
  if (this.myForm.invalid) {
    return alert("El formulario es inválido, asegúrese de que rellenó todos los campos correctamente.")
  } else {
    this.servicio.crearHabilidad(this.myForm.value).subscribe(() => { alert("Se creó correctamente"); })
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
