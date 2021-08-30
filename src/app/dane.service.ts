import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DaneService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
  }

  pobierzOsoby(): Observable<any> {
    console.log('poczatek pobierz osoby');
    return this.http.get<any>('http://localhost:3200/api/lista', {headers: this.headers});
  }
}

