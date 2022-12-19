import { Component } from '@angular/core';
import { hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-kanto',
  templateUrl: './kanto.component.html',
  styleUrls: ['./kanto.component.scss']
})
export class KantoComponent {

  heroes: hero[]=[];

  constructor(private heroService: HeroService){
  }
    ngOnInit(): void {
  this.heroService.getHeroes().subscribe(
    ((data)=> this.heroes=data)
  );
    }

}
