import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  canActivate(): any {
    this.authService.loginLogout().subscribe(result => {
      this.isLoggedIn = result;
      if (!this.isLoggedIn) {
        return false
      }
      return true;
    });
  }
}
