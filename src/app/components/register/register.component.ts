import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _flash: FlashMessagesService,
    private _router: Router) { }
  
  @ViewChild('form') form;

  user = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  }
  isPublisher: boolean = false;

  ngOnInit(): void {
  }

  toggleUser() {
    this.isPublisher = !this.isPublisher;
    return;
  }

  specifyUserRole() {
    if(this.isPublisher) {
      this.user.role = 'publisher';
    }
    return;
  }

  onRegisterSubmit() {
    this.specifyUserRole();
    const user = this.user;
    this._auth.registerUser(user).subscribe(data => {
      this._flash.show('registered user', { cssClass: 'alert-success', timeout: 5000});
      this.form.reset();
      this._router.navigate(['/login']);
    }, err => {
      this._flash.show(err, { cssClass: 'alert-danger', timeout: 10000});
    })
    return;
  }
}
