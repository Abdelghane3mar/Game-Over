import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {


  err:any;

  constructor(private _AuthService:AuthService , private _Router:Router ) {}


  registerForm:FormGroup = new FormGroup({
        
        email : new FormControl(null , [Validators.required , Validators.email]),
        password : new FormControl(null , [Validators.required , Validators.pattern('^[A-Za-z0-9]{3,10}$')]),

        
  }) ;

  setLoginForm(registerForm:FormGroup)
  {
    console.log(registerForm)

      this._AuthService.signIn(registerForm.value).subscribe( (register) => {

        if (register.message === 'success') 
        {

          localStorage.setItem("currentToken" , register.token)

          this._AuthService.saveUserData()

            this._Router.navigate(['/home']) ;
          
        }
        else
        {
          this.err =  register.message;
      }

      } )
  }



  }

