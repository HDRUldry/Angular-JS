import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { hero } from '../models/hero';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent {
  constructor(private userService: UserService, private router:Router){ }

  onClick(){
    this.userService.logout
    this.router.navigateByUrl('login')

  }

  


}

