import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/service/skills.service';
import { Habilidad } from '../interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  formList: Habilidad[];
  login: boolean;
  numerito: number = 40;

  constructor(private servicio: SkillsService) { 
    this.getSkills()
  }

  ngOnInit(): void { 
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      this.login = true;
    } else {
      this.login = false;
    } }

  //ID
  editForm(id:any, habilidad:any, nivel:any){
    this.servicio.editingId = id;
    this.servicio.editingHabilidad = habilidad;
    this.servicio.editingNivel = nivel;
  }

  //GET
  getSkills() {
    this.servicio.obtenerHabilidad().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  // DELETE
  deleteSkill(habilidad: Habilidad) {
    const result = confirm("¿Estás seguro de que quieres eliminar?");
    if(result){
    console.log("vamos a ver que chucha pasa");
    this.servicio.borrarHabilidad(habilidad).subscribe(() => (
      this.formList = this.formList.filter( (t) => {
        return t.id !== habilidad.id
      })
    )), () => { alert("Se eliminó correctamente."); }
    }
  }

  // PERCENT STYLE
  numberToPercent(number: any) {
    return number + '%';
  }

}
