import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //apiurl = 'https://localhost:44338/api/Users/Authenticate'
  apiurl = 'https://localhost:44335/api/Users/Authenticate'
  constructor(private http:HttpClient) {

   }
   ProceedLogin(UserCred:any):Observable<any>{
     console.log(UserCred);

     return this.http.post<any>(this.apiurl,UserCred);
   }

   // authGuard ....
   IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  GetToken(){
   return localStorage.getItem('token')||'';
  }
}
