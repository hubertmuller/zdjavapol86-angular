import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log('ngoninit');
  }

  ngOnDestroy(): void {
    console.log('formularz component ngdestroy');
  }


}
