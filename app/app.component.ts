/*
 * app.component.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * Root component for the Angular 2 app. This is the starting point of the app, which is bootstrapped in app.module.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';

}