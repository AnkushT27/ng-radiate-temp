import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
 const canActivate = localStorage.getItem('token')?  true : false
return canActivate
  }
}