import { Component } from '@angular/core';
import { hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hoenn',
  templateUrl: './hoenn.component.html',
  styleUrls: ['./hoenn.component.scss']
})
export class HoennComponent {

  heroes: hero[]=[];

  constructor(private heroService: HeroService){
  }
    ngOnInit(): void {
  this.heroService.getPokemonHoenn().subscribe(
    ((data)=> this.heroes=data)
  );
    }

}
