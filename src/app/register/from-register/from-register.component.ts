import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-from-register',
  templateUrl: './from-register.component.html',
  styleUrls: ['./from-register.component.scss']
})
export class FromRegisterComponent {

  RegisterForm = new FormGroup({
    Email: new FormControl('', [Validators.email, Validators.required]),
    Password: new FormControl('', [Validators.required]),
  })

  constructor(private heroService: HeroService, private router: Router, private userService: UserService) { }

  onSubmit() {

    console.log(this.RegisterForm.value);
    let credentials = { ...this.RegisterForm.value };
    this.userService.addUser(credentials).subscribe({
      next: (data) => {
        console.log(data)
        this.userService.setLogin();
        this.router.navigateByUrl('/')
        alert ("Un mail vous à été envoyé merci de verifier votre identité")
      },
      error: (error) => {
        console.log(error)
      }

    });

  }

}
