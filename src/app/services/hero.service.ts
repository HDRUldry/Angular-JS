import { Injectable } from '@angular/core';
import { hero } from '../models/hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: hero[] = [
    { id: 1, name: "Bulbizarre" },
    { id: 2, name: "Herbizarre" },
    { id: 3, name: "Florizarre" },
    { id: 4, name: "Salameche" },
    { id: 5, name: "Reptincel" },
    { id: 5, name: "Dracaufeu" },
    { id: 5, name: "Carapuce" },
    { id: 5, name: "Carabaffe" },
    { id: 5, name: "Tortank" },
  ];

  constructor() { }

  getHeroes(): hero[] {

    return this.hero;

  }

  getTopHeroes(): hero[]{

    return this.hero.slice(0,40);
  }

getHero(id: number): hero | undefined {
return this.hero.find(
  (h: hero) => h.id == id
);

}

}