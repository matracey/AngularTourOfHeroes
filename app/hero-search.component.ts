/*
 * hero-search.component.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.11.2016
 * 
 * The Hero Search component of the app. 
 * Allows the Heroes list to be searched by Hero name. 
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

import { HeroSearchService } from './hero-search.service';
import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    providers: [
        HeroSearchService
    ]
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private heroSearchService: HeroSearchService,
        private router: Router
    ) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.heroes = this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if the next search term is the same as the previous one.
            // Switch to a new Observable each time and return either the Http Observable or an empty Observable Hero array if there is no search term.
            .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
            .catch(e => {
                console.error(e);
                return Observable.of<Hero[]>([]);
            });
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}