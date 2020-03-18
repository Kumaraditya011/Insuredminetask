import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
      if (this.authService.loggedIn()) {
          // logged in so return true
          return true;
      }  else{

      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login']);
      return false;
      }
  
}}
