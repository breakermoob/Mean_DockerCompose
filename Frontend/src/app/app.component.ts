import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from './services/heroes.service';
import { Hero } from './models/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Heroes';

  heroes: Hero[]

  ngOnInit() {
    this.getHeroes();
  }
  
  constructor(public heroService: HeroesService  , public routes: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(result =>
      {
        this.heroes=result;
        console.log("Heroes "+JSON.stringify(result));
      });
  }
}

