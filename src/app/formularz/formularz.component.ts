import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {DaneService, Osoba} from '../dane.service';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  public forma: FormGroup = new FormGroup({
      imie: new FormControl('Janek',
        {validators: [Validators.pattern(/^([A-z]{3,})$/), Validators.required], updateOn: 'blur'}
        ),
      nazwisko: new FormControl('Kowalski',
        {validators: [Validators.pattern(/^([A-z\-]{3,})$/)], updateOn: 'change'}
        )
    }
  );

  constructor(private daneService: DaneService) { }

  public przestaw(): void {
    this.forma.controls.nazwisko.setValue('Nowak');
    this.forma.controls.imie.setValue('Jan');
  }

  ngOnInit(): void {
    console.log('ngoninit');
    this.forma.valueChanges.subscribe( (val) => {
        console.log(val);
      }
    )
  }

  ngOnDestroy(): void {
    console.log('formularz component ngdestroy');
  }


  wyslij() {
    const stanFormy: {[p: string]: AbstractControl} = this.forma.controls;
    const osoba: Osoba = {
      imie: stanFormy.imie.value,
      nazwisko: stanFormy.nazwisko.value,
    };

    this.daneService.zapiszOsobe(osoba).subscribe( () => {
      console.log('Zapisano');
    },
      () => {
        console.log('Blad - nie Zapisano');
      });
  }
}
