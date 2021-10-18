import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';

import { HttpService } from './http.service';
import { SeinfeldComponent } from './seinfeld/seinfeld.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'coffee' , component:CoffeeComponent},
  { path: 'seinfeld' , component:SeinfeldComponent},
  { path: 'home' , component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
