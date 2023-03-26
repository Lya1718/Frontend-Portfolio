import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean;

  constructor(private http: HttpClient) { }

  //BOOLEAN
  loginLogout(): Observable<any> {
    return of(this.isLoggedIn);
  }

  //LOGIN
  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ email, password });

    return this.http.post('https://lourdes-ramos.onrender.com/login', body, { headers }).pipe(
      map(response => {
        if (response) {
          sessionStorage.setItem('isLoggedIn', 'true');
          return true;
        } else {
          sessionStorage.setItem('isLoggedIn', 'false');
          return false;
        }
      })
    );
  }

  //LOGOUT
  logout(): Observable<any> {
    sessionStorage.removeItem('isLoggedIn');
    return of(this.isLoggedIn);
    }

}
