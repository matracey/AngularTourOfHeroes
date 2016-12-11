/*
 * app-routing.module.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * Routing module of the application. Handles setting up the URL routes to the components within the app.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: HeroDetailComponent },
    { path: 'heroes', component: HeroesComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}