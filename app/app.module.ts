/*
 * app.module.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * The root module of the application. 
 * Resolves all of the required imports, declares the components within the app, sets up the service providers and bootstraps the AppComponent.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HeroService } from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
