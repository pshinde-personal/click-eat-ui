import { RestaurantClass } from './../../models/restaurant.class';
import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {

  constructor(
    private _flash: FlashMessagesService,
    private _router: Router,
    private _resturantService: RestaurantService
  ) { }

  ngOnInit(): void {
  }

  newRestaurant = new RestaurantClass();

  onRestaurantSubmit() {
    this._flash.show('submit succesful');
  }
}
