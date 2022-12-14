import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { hero } from '../models/hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: hero[]=[];

constructor(private heroService: HeroService){
}
  ngOnInit(): void {
this.heroService.getHeroes().subscribe(
  ((data)=> this.heroes=data)
);
  }



}
