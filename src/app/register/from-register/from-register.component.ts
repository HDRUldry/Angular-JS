import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-from-register',
  templateUrl: './from-register.component.html',
  styleUrls: ['./from-register.component.scss']
})
export class FromRegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
    
    
    })
    
    onSubmit(){
    
    console.log(this.registerForm.value);
    
    }

}
