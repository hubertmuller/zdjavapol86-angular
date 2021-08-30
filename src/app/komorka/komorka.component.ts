import {Component, Input, OnInit} from '@angular/core';
import {Osoba} from '../dane.service';

@Component({
  selector: 'app-komorka',
  templateUrl: './komorka.component.html',
  styleUrls: ['./komorka.component.scss']
})
export class KomorkaComponent implements OnInit {

  @Input()
  public tresc: Osoba[];

  @Input()
  public tytul: string;

  constructor() { }

  ngOnInit(): void {
  }

}
