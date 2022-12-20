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
  
  
    constructor(private route: ActivatedRoute, private heroService: HeroService) { }
  
  
  
    ngOnInit(): void {
  
      this.getHero();
  
    }
  
  
  
    getHero(): void {
  
      const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  
      this.heroService.getHero(id).subscribe((herolist: any) => {
  
        if (herolist.length >= 1) {
  
          this.hero = herolist[0]
  
        }
      });
  
    }
  
  }
  
