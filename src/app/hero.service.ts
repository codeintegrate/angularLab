import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from "./heroes-mock";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Hero[]{
    return HEROES;
  }
}
