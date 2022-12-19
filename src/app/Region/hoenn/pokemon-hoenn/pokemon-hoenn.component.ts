import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-pokemon-hoenn',
  templateUrl: './pokemon-hoenn.component.html',
  styleUrls: ['./pokemon-hoenn.component.scss']
})
export class PokemonHoennComponent {

  @Input() hero: hero={

    id:0,
    name: ''
      };
  

}
