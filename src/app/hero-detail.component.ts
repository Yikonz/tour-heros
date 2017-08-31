/**
 * Created by zml on 2017/8/30.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap' // import the switchMap operate to use later with the route parameters Observable.

import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
      this.heroService.getHero(+params.get('id'))) // id is a number, route parameters are always strings, converted with the JavaScript(+) operator
      .subscribe(hero => this.hero = hero);  // If a user re-navigates to this component while a getHero() request is still
                                             //processing, switchMap cancels the old request and then calls getHero() again.
  }

  goBack(): void {
    this.location.back();
  }
}
