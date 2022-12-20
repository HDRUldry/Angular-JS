import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent {

  @Input() hero: hero={

    id:0,
    name: '',
    Element: '',
    Description: ''
      };


}
