import { Component, OnInit } from '@angular/core';
import {DaneService} from '../dane.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public osoby: any;
  public error = false;

  constructor(private ds: DaneService) {
    console.log('1 start konstruktora pobierz osoby');
    ds.pobierzOsoby().subscribe(
      (val: any) => {
        console.log('2 przyszla odpowiedz pobierz osoby');
        this.osoby = val;
      },
      (error) => {
        this.error = true;
      }
    );
    console.log('3 koniec konstruktora pobierz osoby');
  }

  ngOnInit(): void {
    console.log('4 ng on init pobierz osoby');
  }

}
