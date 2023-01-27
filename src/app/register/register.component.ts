// import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { Component } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  // constructor(
  //   private fb: FormBuilder,
  //   private _AuthService: AuthService,
  //   private _Router: Router,
  //   private _ToastrService: ToastrService
  // ) {}

  
  
  err:any;

  constructor(private _AuthService:AuthService , private _Router:Router ) {}


  registerForm:FormGroup = new FormGroup({
        
        first_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
        last_name : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
        age : new FormControl(null , [Validators.required , Validators.min(18) , Validators.max(80)]),
        email : new FormControl(null , [Validators.required , Validators.email]),
        password : new FormControl(null , [Validators.required , Validators.pattern('^[A-Za-z0-9]{3,10}$')]),

        
  }) ;

  setSignUpForm(registerForm:FormGroup)
  {
    if(registerForm.valid)
    {
        this._AuthService.signUp(registerForm.value).subscribe( (register) => {


          if (register.message === 'success') 
          {

              this._Router.navigate(['/login']) ;
            
          }
          else
          {
              this.err =  register.message;
          }

          } ) ;

    }

  }



  // registerForm: FormGroup = this.fb.group({
  //   first_name: new FormControl(null, [Validators.required, Validators.minLength(3),Validators.maxLength(20) ]),
  //   last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z0-9]{3,10}$')]),
  //   age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(80)  ])
  // });

  // // Sign Up Form

  // setSignUpForm(obj: FormGroup):void {
  //   if (obj.valid)
  //     this._AuthService.signUp(obj.value).subscribe({
  //       next: (response) => {console.log(response);
  //         if (response.message === 'success') {
  //           obj.reset();
  //           this._ToastrService.success('SignUp Successfully', 'Success', {
  //             timeOut: 3000,
  //           });
  //           this._Router.navigate(['/login']);
  //         } else {
  //           this._ToastrService.error(
  //             `${response.message.slice(response.message.indexOf(':') + 1)}`,
  //             'Error',
  //             {
  //               timeOut: 3000,
  //             }
  //           );
  //         }
  //       },
  //     });
  // }
} ;

