/*
 * hero-detail.component.ts
 * 
 * Author:  Martin Tracey
 * Created: 12.10.2016
 * 
 * The Hero Detail component of the app. 
 * Will display the details of a hero when a Hero is clicked from within the Heroes component.
 * 
 * See https://angular.io/docs/ts/latest/tutorial to learn more about Angular 2.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    constructor(
        private heroService: HeroService, 
        private route: ActivatedRoute, 
        private location: Location
    ){

    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.hero = hero);
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }
}