import { HeroService } from './../hero.service';
import { HEROES } from './../heroes-mock';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes : Hero[] ;
  selectedHero:Hero;
  onSelect(hero:Hero){
    this.selectedHero=hero;
  }
  
  constructor(private heroesService: HeroService) {
    }
    getheroes(): void{
      this.heroesService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }

  ngOnInit() {
    this.getheroes();
  }

}
