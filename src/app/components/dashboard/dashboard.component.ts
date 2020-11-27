import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _auth: AuthService,
    private _flash: FlashMessagesService,
    private _router: Router) { }

  user: any
  
  ngOnInit(): void {
    this.user = this._auth.user;
  }

}
