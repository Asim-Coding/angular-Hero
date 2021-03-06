import { Component, OnInit, } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  

  constructor() { }
  // creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
// selectedHero?: Hero;
// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }