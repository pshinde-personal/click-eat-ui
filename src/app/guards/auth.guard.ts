import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable()
export class AUthGuard implements CanActivate {
  constructor( private _auth: AuthService,
    private _router: Router) {}
  
  canActivate() {
    if(this._auth.isLoggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}