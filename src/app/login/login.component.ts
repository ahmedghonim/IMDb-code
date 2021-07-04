import { Component, OnInit } from '@angular/core';
import { FormGroup  , FormControl , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiSignService } from './../api-sign.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = '';
  hide = true

  loginForm  = new FormGroup({
    email:new FormControl(null , [Validators.email , Validators.required]),
    password:new FormControl(null , [ Validators.required ]),

  })
 
  constructor(private _ApiSignService:ApiSignService,private _Router:Router) { }

  ngOnInit(): void {
  }
  loginToApi(formData:FormGroup){
  if (formData.valid) {
  this._ApiSignService.login(formData.value).subscribe((response)=>{
    if (response.message=="success") {
      //save token in localstoreag
      localStorage.setItem('userToken',response.token)
      //decode token and save in var => curant user in serves
      this._ApiSignService.curantUserToken()
      //go to home
      this._Router.navigate(["/home"])
     
    }else{
      this.error =response.message
      
    }
    })
  }
}

  


}
