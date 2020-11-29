import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Restaurant, RestaurantResponse } from 'src/app/models/restaurant.model';
import { AuthService } from 'src/app/services/auth.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private _auth: AuthService, 
    private _flash: FlashMessagesService,
    private _router: Router,
    private _restuarantService: RestaurantService) { }

  restaurants: Array<Restaurant>;
  pagination: Object;
  count: number
  
  ngOnInit(): void {
    this._restuarantService.getAllRestaurants().subscribe((data: RestaurantResponse) => {
      this.restaurants = data.data,
      this.pagination = this.pagination;
      this.count = data.count;
    }, err => {
      this._flash.show(err, { cssClass: 'alert-danger', timeout: 5000});
    });
  }

}
