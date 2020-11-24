import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _router: Router,
    private _flash: FlashMessagesService) { }
  
  user: any;

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser() {
    if(!!(localStorage.getItem('user'))) {
      this._auth.loadUser();
      this.user = this._auth.user;
    }
    else {
      this.user = this._auth.authenticateUser().subscribe((data: {success: string, data: any}) => {
        const userData = data.data;
        this.user = userData;
        this._auth.saveUser(userData);
      }, err=> {
        this._flash.show('failed to load profile info.', { cssClass: 'alert-danger', timeout: 5000});
        this._router.navigate(['/login']);
      });
    }
    return ;
  }
}
