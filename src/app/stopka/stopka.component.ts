import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {RozneService} from '../rozne.service';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class StopkaComponent implements OnInit, OnDestroy {

  private tytul: string;
  public tytul2: string;
  public rok: number;

  constructor(private rozneService: RozneService) {
    this.tytul = 'czesc';
    this.tytul2 = 'czesc2';
    console.log('construktor');
    this.rok = rozneService.rok();
  }

  public obliczbmi(): number {
    return this.rozneService.oblicz(100, 185);
  }

  public hej(): string {
    return this.tytul;
  }

  ngOnInit(): void {
    console.log('ngoninit');
  }

  ngOnDestroy(): void {
    console.log('ngdestroy');
  }



}
