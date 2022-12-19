import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './login/form-login/form-login.component';
import { DetailsHeroComponent } from './details-hero/details-hero.component';
import { RegisterComponent } from './register/register.component';
import { FromRegisterComponent } from './register/from-register/from-register.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { KantoComponent} from './Region/kanto/kanto.component';
import { PokemonKantoComponent } from './Region/kanto/pokemon-kanto/pokemon-kanto.component';
import { HoennComponent } from './Region/hoenn/hoenn.component';
import { PokemonHoennComponent } from './Region/hoenn/pokemon-hoenn/pokemon-hoenn.component';
import { SinnohComponent } from './Region/sinnoh/sinnoh.component';
import { PokemonSinnohComponent } from './Region/sinnoh/pokemon-sinnoh/pokemon-sinnoh.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsHeroComponent,
    LayoutComponent,
    LoginComponent,
    FormLoginComponent,
    RegisterComponent,
    FromRegisterComponent,
    BackofficeComponent,
    KantoComponent,
    PokemonKantoComponent,
    HoennComponent,
    PokemonHoennComponent,
    SinnohComponent,
    PokemonSinnohComponent,
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
