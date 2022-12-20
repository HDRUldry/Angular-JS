import { Component, OnInit } from '@angular/core';
import { hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  heros: hero []=[];
  constructor(private heroService: HeroService){
  }

  ngOnInit(): void {
   // this.hero=this.heroService.getTopHeroes();
    this.heroService.getTopPokemon().subscribe(
  ((data) => this.heros=data)

    );
  }

  
}
