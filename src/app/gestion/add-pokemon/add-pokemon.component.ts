import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent {

  PokemonForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    Region: new FormControl('', [Validators.required]),
    Element: new FormControl('', [Validators.required]),
    Description: new FormControl('', [Validators.required])

  })

  constructor(private heroService: HeroService, private router: Router, private userService: UserService) { }

  onSubmit() {

    console.log(this.PokemonForm.value);
    let credentials = { ...this.PokemonForm.value };
    this.heroService.addPokemon(credentials).subscribe({
      next: (data) => {
        console.log(data)
        this.userService.setLogin();
        this.router.navigateByUrl('/admin')
      },
      error: (error) => {
        console.log(error)
      }

    });

  }

}
