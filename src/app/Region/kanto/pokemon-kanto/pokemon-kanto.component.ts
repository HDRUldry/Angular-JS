import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-pokemon-kanto',
  templateUrl: './pokemon-kanto.component.html',
  styleUrls: ['./pokemon-kanto.component.scss']
})
export class PokemonKantoComponent {

  
  @Input() hero: hero={

    id:0,
    name: ''
      };

}
