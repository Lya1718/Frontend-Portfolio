import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  loginForm: FormGroup;
  success: boolean;

  constructor(private authService: AuthService, private ruta: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      }
    )
  }

  login() {
    // this.authService.login().subscribe(
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value).subscribe(
      {
        next: () => {
          this.ruta.navigate(['/welcome']);
        },
        error: () => {
          alert("El email o la contraseña son incorrectos.");
        }
      }
    );
  }

  loginn() {
    this.authService.login(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .subscribe(() => {console.log("no sé si estoy logeado o no")});
  }

  get formCtrl() {
    return this.loginForm.controls;
  }

  //CONEXION HTML
  get Email() {
    return this.loginForm.get('email');
  }
  get Password() {
    return this.loginForm.get('password');
  }
}
