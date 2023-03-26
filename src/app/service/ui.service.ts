import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UiService {

  constructor(private http: HttpClient,) { }

  //GET
  get(url: string): Observable<any> {
    return this.http.get(url, httpOptions);
  }

  //POST
  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data, httpOptions)
  }

  //DELETE
  delete(url: string, data: any): Observable<any> {
    return this.http.delete(`${url}/${data.id}`);
  }
}
