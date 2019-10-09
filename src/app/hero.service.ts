
import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from "./heroes-mock";
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService : MessageService) { }
  getHeroes(): Observable <Hero[]>{
    //After fetching the heroes data
    this.messageService.add('Heroes Fetched Successfully');
    return of(HEROES);
  }
}
