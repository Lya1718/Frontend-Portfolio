import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { InterceptorService } from './service/interceptor.service';

import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { BodyComponent } from './components/body/body.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { GuardGuard } from './service/guard.guard';
import { AboutFormComponent } from './components/about-form/about-form.component';
import { EducationFormComponent } from './components/education-form/education-form.component';
import { SkillsFormComponent } from './components/skills-form/skills-form.component';
import { ProjectsFormComponent } from './components/projects-form/projects-form.component';
import { EducationFormAddComponent } from './components/education-form-add/education-form-add.component';
import { SkillsFormAddComponent } from './components/skills-form-add/skills-form-add.component';
import { ProjectsFormAddComponent } from './components/projects-form-add/projects-form-add.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciasFormComponent } from './components/experiencias-form/experiencias-form.component';
import { ExperienciasFormAddComponent } from './components/experiencias-form-add/experiencias-form-add.component';

const rutas: Routes = [
  {path:'login', component:IniciarSesionComponent},
  {path:'welcome', component:BodyComponent},
  {path:'about-edit', component:AboutFormComponent},
  {path:'education-edit', component:EducationFormComponent},
  {path:'skills-edit', component:SkillsFormComponent},
  {path:'projects-edit', component:ProjectsFormComponent},
  {path:'experiences-edit', component:ExperienciasFormComponent},
  {path:'education-add', component:EducationFormAddComponent},
  {path:'skills-add', component:SkillsFormAddComponent},
  {path:'projects-add', component:ProjectsFormAddComponent},
  {path:'experiences-add', component:ExperienciasFormAddComponent},
  {path:'', component:PortfolioComponent, canActivate:[GuardGuard]}
  
]

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    BodyComponent,
    ProjectsComponent,
    FooterComponent,
    AboutFormComponent,
    EducationFormComponent,
    SkillsFormComponent,
    ProjectsFormComponent,
    EducationFormAddComponent,
    SkillsFormAddComponent,
    ProjectsFormAddComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    ExperienciasComponent,
    ExperienciasFormComponent,
    ExperienciasFormAddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas, {enableTracing: true}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

