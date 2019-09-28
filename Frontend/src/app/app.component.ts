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
  title = 'Listado de heroes';

  names = [];

  heroes: Hero[]

  ngOnInit() {
    this.getHeroes();
    setTimeout(function () {
        console.log(JSON.stringify(this.names))
    }, 5000);
  }

  constructor(public heroService: HeroesService, public routes: Router) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(result => {
        this.names = result;
        console.log("Heroes " + JSON.stringify(result));
      });
  }
}

