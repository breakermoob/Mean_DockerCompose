import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Hero} from "../models/Hero";
@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>("http://localhost:3000/heroes");
  }
}

