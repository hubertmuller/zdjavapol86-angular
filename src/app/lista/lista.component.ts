import { Component, OnInit } from '@angular/core';
import {DaneService} from '../dane.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private ds: DaneService) {
    ds.pobierzOsoby();
  }

  ngOnInit(): void {
  }

}
