import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { GlownyComponent } from './glowny/glowny.component';
import { FormularzComponent } from './formularz/formularz.component';
import { ListaComponent } from './lista/lista.component';
import {HttpClientModule} from '@angular/common/http';
import { KomorkaComponent } from './komorka/komorka.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    GlownyComponent,
    FormularzComponent,
    ListaComponent,
    KomorkaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
