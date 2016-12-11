/*
 * hero-search.service.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.11.2016
 * 
 * Service that allows Heroes to be searched by Hero name. 
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<Hero[]> {
        return this.http.get(`app/heroes/?name=${term}`)
            .map((r: Response) => r.json().data as Hero[]);
    }
}