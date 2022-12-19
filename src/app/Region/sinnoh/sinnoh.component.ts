import { Component } from '@angular/core';
import { hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-sinnoh',
  templateUrl: './sinnoh.component.html',
  styleUrls: ['./sinnoh.component.scss']
})
export class SinnohComponent {

  heroes: hero[]=[];

constructor(private heroService: HeroService){
}
  ngOnInit(): void {
this.heroService.getHeroes().subscribe(
  ((data)=> this.heroes=data)
);
  }

}
