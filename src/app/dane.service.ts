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

  pobierzOsoby(): Observable<Osoba[]> {
    console.log('poczatek pobierz osoby');
    return this.http.get<Osoba[]>('http://localhost:3200/api/lista', {headers: this.headers});
  }

  zapiszOsobe(osoba: Osoba): Observable<any> {
    return this.http.post<any>('http://localhost:3200/api/osoba', {headers: this.headers});
  }
}

export interface Osoba {
  id?: number;
  imie: string;
  nazwisko: string;
}
