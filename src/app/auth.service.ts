import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
 import { Observable,BehaviorSubject } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userDate:BehaviorSubject<any>=new BehaviorSubject(null);

  saveUserData(){
    let edcodedToken=JSON.stringify(localStorage.getItem('currentToken'));
    let dcodedToken:object=jwtDecode(edcodedToken);
    this.userDate.next(dcodedToken);
    console.log(this.userDate)
  }
  constructor( private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem('currentToken')!=null)
    {
        this.saveUserData();
    }
  }
   

       signOut(){
        localStorage.removeItem('currentToken');
        this.userDate.next(null);
        this._Router.navigate(['/login'])
       }



    signUp(UserDate:Object):Observable<any>
    {
       return  this._HttpClient.post('https://route-movies-api.vercel.app/signup',UserDate);
    }
    
    signIn(UserDate:Object):Observable<any>
    {
       return  this._HttpClient.post('https://route-movies-api.vercel.app/signin',UserDate);
    }
  }

