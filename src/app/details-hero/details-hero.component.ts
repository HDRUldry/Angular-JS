import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-details-hero',
  templateUrl: './details-hero.component.html',
  styleUrls: ['./details-hero.component.scss']
})
export class DetailsHeroComponent implements OnInit {

  hero: hero | undefined;

  constructor(private heroService: HeroService, private route: ActivatedRoute){
  }
  ngOnInit(): void {
    this.route.params.subscribe(
(params) => this.heroService.getHero(params['id']),
        
    )
  }

}
