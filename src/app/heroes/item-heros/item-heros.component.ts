import { Component, Input } from '@angular/core';
import { hero } from 'src/app/models/hero';

@Component({
  selector: 'app-item-heros',
  templateUrl: './item-heros.component.html',
  styleUrls: ['./item-heros.component.scss']
})
export class ItemHerosComponent {

    @Input() hero: hero={

  id:0,
  name: ''
    };

}
