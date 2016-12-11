/*
 * rxjs-extensions.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.11.2016
 * 
 * Imports all rxjs extensions that will be needed for the app.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';