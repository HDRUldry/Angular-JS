import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsHeroComponent } from './details-hero/details-hero.component';

const routes: Routes = [


  {path: '', component: DashboardComponent},
 { path: 'heroes', component: HeroesComponent },
 {path: 'hero/:id', component: DetailsHeroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
