import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { DetailsHeroComponent } from './details-hero/details-hero.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [

  {path: '', component: LayoutComponent, children :[
    {path: '', component: DashboardComponent},
    { path: 'heroes', component: HeroesComponent },
    {path: 'hero/:id', component: DetailsHeroComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  {path: 'admin', component: BackofficeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
