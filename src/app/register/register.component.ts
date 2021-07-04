import { Component, OnInit } from '@angular/core';
import { ApiSignService } from './../api-sign.service';
import { Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide = true;
  error=""
  constructor(private _ApiSignService:ApiSignService, private _Router:Router) {}
  registerForm = new FormGroup({
    first_name: new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(3),
      Validators.required,
    ]),
    last_name: new FormControl('', [
      Validators.maxLength(10),
      Validators.minLength(3),
      Validators.required,
    ]),
    age: new FormControl('', [
      Validators.max(70),
      Validators.min(5),
      Validators.required,
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^[A-Z][a-z 0-9]{3,}$'),
    ]),
  });

  signUpToApi(registerFormData:FormGroup){
    if (registerFormData.valid) {
      if (registerFormData.valid) {
      this._ApiSignService.signUp(registerFormData.value).subscribe((response)=>{
        if (response.message=='success') {
          this._Router.navigate(["/login"])
        }else{
          this.error = response.message
        }  
      })
        }
    }
  }
  ngOnInit(): void {}
}
