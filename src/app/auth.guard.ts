import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(

  //   return true;
  // }
  constructor(private service:AuthService,private route:Router){

  }
  canActivate(){
    if(this.service.IsLoggedIn()){
    return true;
    }else{
      this.route.navigate(['login'])
      return false;
    }
  }
}
