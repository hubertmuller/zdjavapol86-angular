import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import {NaglowekComponent} from './naglowek/naglowek.component';
import {ListaComponent} from './lista/lista.component';

const routes: Routes = [
  { path: 'formularz', component: FormularzComponent, children: [
      /*{
        path: 'add', component: FormularzComponent
      }*/
    ]},
  { path: 'lista', component: ListaComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
