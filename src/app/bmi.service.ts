import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {

  constructor() { }

  public oblicz(w: number, h: number): number {
    return h / (w * w) ;
  }
}
