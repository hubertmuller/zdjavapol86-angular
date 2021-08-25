import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BmiService} from '../bmi.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StopkaComponent implements OnInit {

  private tytul: string;
  public tytul2: string;

  constructor(private bmi: BmiService) {
    this.tytul = 'czesc';
    this.tytul2 = 'czesc2';
    console.log('construktor');
  }

  public obliczbmi(): number {
    return this.bmi.oblicz(100, 185);
  }

  public hej(): string {
    return this.tytul;
  }

  ngOnInit(): void {
    console.log('ngoninit');
  }



}
