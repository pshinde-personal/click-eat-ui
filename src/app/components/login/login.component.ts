import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  @ViewChild('form') form;

  user = {
    email: '',
    password: ''
  }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = this.user

    console.log(user);
    this.form.reset();
  }
}
