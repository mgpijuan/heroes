import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  // Variables que vamos a usar
 // selectedHero?: Hero;  
 //l'eliminem qperque ja tenim el servei fet per una altra banda
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
    //private messageService: MessageService
 

  ngOnInit() {
    this.getHeroes();
  }

  /* // Metodos que voy a usar en el HTML
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  } */

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}