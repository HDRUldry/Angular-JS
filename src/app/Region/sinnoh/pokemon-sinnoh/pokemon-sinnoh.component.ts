import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-pokemon-sinnoh',
  templateUrl: './pokemon-sinnoh.component.html',
  styleUrls: ['./pokemon-sinnoh.component.scss']
})
export class PokemonSinnohComponent {

  @Input() hero: hero={

    id:0,
    name: ''
      };
  

}
