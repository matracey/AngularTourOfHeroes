import { Injectable } from '@angular/core';
/*
 * hero.service.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * Handles the get, create, update and delete of Hero objects to the Web API.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error has occurred while fetching the Hero data.', error);
        return Promise.reject(error.message || error);
    }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl) // returns an RxJS Observable
                    .toPromise()
                    .then(response => response.json().data as Hero[])
                    .catch(this.handleError);
    }

    getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get(url)
                        .toPromise()
                        .then(r => r.json().data as Hero)
                        .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http.post(this.heroesUrl, JSON.stringify({name: name}), { headers: this.headers })
            .toPromise()
            .then(r => r.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}