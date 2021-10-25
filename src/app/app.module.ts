import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';

import { FormsModule } from '@angular/forms';
import { SeinfeldComponent } from './seinfeld/seinfeld.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { TravelComponent } from './travel/travel.component';

@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    SeinfeldComponent,
    HomeComponent,
    TravelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
