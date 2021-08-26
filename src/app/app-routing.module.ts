import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularzComponent } from './formularz/formularz.component';
import {NaglowekComponent} from './naglowek/naglowek.component';

const routes: Routes = [
  { path: 'formularz', component: FormularzComponent},
  { path: 'lista', component: ListaComponent},
  { path: '', redirectTo: '/formularz', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
