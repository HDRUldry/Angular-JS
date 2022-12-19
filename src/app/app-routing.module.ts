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

const routes: Routes = [

  {path: '', component: LayoutComponent, children :[
    {path: '', component: DashboardComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'Region/sinnoh', component: SinnohComponent},
    {path: 'Region/kanto', component: KantoComponent},
    {path: 'Region/hoenn', component: HoennComponent},
  ]},
  {path: 'admin', component: BackofficeComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
