import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  @ViewChild('form') form;
  user = {
    name: '',
    email: '',
    password: '',
    role: 'user'
  }
  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const user = this.user;
    console.log(user);
    this.form.reset();
  }
}
