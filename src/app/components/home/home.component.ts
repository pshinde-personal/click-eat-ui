import { RestaurantService } from 'src/app/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/services/auth.service';
import { Restaurant, RestaurantResponse } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth: AuthService, 
    private _flash: FlashMessagesService,
    private _router: Router,
    private _restuarantService: RestaurantService) { }



  ngOnInit(): void {
    
  }

  onAddressChange(event) {
    console.log(event);
  }
}
