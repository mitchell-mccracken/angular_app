import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeeComponent } from './coffee/coffee.component';

import { HttpService } from './http.service';
import { SeinfeldComponent } from './seinfeld/seinfeld.component';

import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [
  { path: 'coffee' , component:CoffeeComponent},
  { path: 'seinfeld' , component:SeinfeldComponent},
  { path: 'home' , component:HomeComponent},
  { path: 'travel' , component:TravelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
