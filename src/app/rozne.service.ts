import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RozneService {

  constructor() { }

  public oblicz(w: number, h: number): number {
    return h / (w * w) ;
  }

  rok(): number {
    return (new Date()).getFullYear();
  }
}
