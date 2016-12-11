/*
 * dashboard.component.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * The Dashboard component of the app. 
 * Will display the top 5 heroes in the app and will also provide navigation links to access the other components in the app.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}