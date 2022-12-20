import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailsHeroComponent } from './details-hero/details-hero.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { AuthGuard } from './utils/auth.guard';
import { KantoComponent } from './Region/kanto/kanto.component';
import { HoennComponent } from './Region/hoenn/hoenn.component';
import { SinnohComponent } from './Region/sinnoh/sinnoh.component';
import { AddPokemonComponent } from './gestion/add-pokemon/add-pokemon.component';
import { EditPokemonComponent } from './gestion/edit/edit-pokemon/edit-pokemon.component';
import { GestionComponent } from './gestion/gestion.component';
import { EditComponent } from './gestion/edit/edit.component';
import { HomeBOComponent } from './gestion/home-bo/home-bo.component';

const routes: Routes = [

  {path: '', component: LayoutComponent, children :[
    {path: '', component: DashboardComponent},
    {path: 'hero/:id', component: DetailsHeroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'Region/sinnoh', component: SinnohComponent},
    {path: 'Region/kanto', component: KantoComponent},
    {path: 'Region/hoenn', component: HoennComponent},



  ]},
  {path: 'admin', component: BackofficeComponent, canActivate: [AuthGuard], children : [
    {path: 'Region/sinnoh', component: SinnohComponent},
    {path: 'Region/kanto', component: KantoComponent},
    {path: 'Region/hoenn', component: HoennComponent},
    {path: 'gestion', component: GestionComponent},
    {path: 'gestion/add-pokemon', component: AddPokemonComponent},
    {path: 'gestion/edit', component: EditComponent},
    {path: 'gestion/home-bo', component: HomeBOComponent},
  ]

},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
