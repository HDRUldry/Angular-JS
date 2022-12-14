import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemHerosComponent } from './heroes/item-heros/item-heros.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { DetailsHeroComponent } from './details-hero/details-hero.component';
import { RegisterComponent } from './register/register.component';
import { FromRegisterComponent } from './register/from-register/from-register.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    DetailsHeroComponent,
    ItemHerosComponent,
    LayoutComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    FromRegisterComponent,
    BackofficeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
