import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _flash: FlashMessagesService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  onLogout() {
    this._auth.logOutUser();
    this._flash.show('you are logged out now', { cssClass: 'alert-success', timeout: 5000});
    this._router.navigate(['/login']);
    return false;
  }
}
