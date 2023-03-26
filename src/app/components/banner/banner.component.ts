import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AboutService } from 'src/app/service/about.service';
import { Persona } from '../interface';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit, AfterViewInit{
  //form
  formList: Persona[];

  //welcome
element?: any;
@ViewChild('title', { static: true }) title: ElementRef;
letters: string[] = ['-', 'W', 'E', 'L', 'C', 'O', 'M', 'E', '-'];

  
  //loginLogout
  logeado: boolean = false;

  constructor(private servicio: AboutService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas(), this.isLogged()
      const isLoggedIn = sessionStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
       this.logeado = true;
      } else {
        this.logeado = false;
      }

  }

  //GET
  getPersonas() {
    this.servicio.obtenerPersona().subscribe((data: any) => { this.formList = data; console.log(data); })
  }

  //LOGGED
  isLogged(){
  this.authService.loginLogout().subscribe((data:any) => this.logeado = (data));
  }

  //LOGIN
  onLogin(){
    this.router.navigate(['/login']);
  }

  onLogout() {
    const result = confirm("¿Está seguro de cerrar sesión?");
    if (result) {
      this.router.navigate(['']);
      this.authService.logout().subscribe(() => {(data: any) => { this.logeado = data; console.log(data); }
      }
      );
    }
  }


//WELCOME
ngAfterViewInit() {
  const title = this.title.nativeElement as HTMLElement;
  const letters = title.querySelectorAll('.letter');

  Array.from(letters).forEach((letter, index) => {
    const spanLetter = letter as HTMLSpanElement;
    spanLetter.addEventListener('mousemove', event => {
      const limit = 20;
      const x = event.clientX - (spanLetter.offsetLeft + spanLetter.clientWidth / 2);
      const y = event.clientY - (spanLetter.offsetTop + spanLetter.clientHeight / 2);
      spanLetter.style.top = `${y / limit}px`;
      spanLetter.style.left = `${x / limit}px`;
    });

    spanLetter.addEventListener('mouseout', () => {
      spanLetter.style.top = '0';
      spanLetter.style.left = '0';
      spanLetter.style.transition = 'all 0.3s ease';
    });
  });
}

}