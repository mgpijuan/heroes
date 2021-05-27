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
  heroes?: Hero[];
  selectedHero?: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  
// Metodos que voy a usar en el HTML
onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

getHeroes(): void {
  //this.heroes = this.heroService.getHeroes();
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

}