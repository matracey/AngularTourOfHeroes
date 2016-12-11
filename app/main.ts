/*
 * main.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * Application start point. Defines the bootstrap module for the app.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
