import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthGardService implements CanActivate {
 
  constructor(private authSevice: AuthService){}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  : Observable<boolean> | boolean{
    return this.authSevice.isAuthenticated().first();
  }
}
