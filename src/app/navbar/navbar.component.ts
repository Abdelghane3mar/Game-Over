import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  //isloding:boolean=false;

  constructor(private _AuthService:AuthService) {

    
   }

   ngOnInit(): void {
    // this._AuthService.userDate.subscribe({
    //   next:()=>{
    //     if(this._AuthService.userDate.getValue()!=null)
    //     {
    //          this.isloding=true;
    //     }
    //     else
    //     {
    //       this.isloding=false;
    //     }
  
    //   }

     
    // })
  }
   signOut()
   {
        this._AuthService.signOut()
   }

  


}
