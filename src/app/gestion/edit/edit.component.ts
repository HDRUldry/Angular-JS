import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  heroes: hero[]=[];

  constructor(private heroService: HeroService){
  }
    ngOnInit(): void {
  this.heroService.getAllPokemon().subscribe(
    ((data)=> this.heroes=data)
  );
    }


}
