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
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    title = 'Tour of Heroes';

}