import { RestaurantService } from 'src/app/services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRestaurantResponseClass, RestaurantResponseClass } from 'src/app/models/restaurant.class';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-restaurant-detail-overview',
  templateUrl: './restaurant-detail-overview.component.html',
  styleUrls: ['./restaurant-detail-overview.component.css']
})
export class RestaurantDetailOverviewComponent implements OnInit {

  constructor(private _router: Router, 
    private _restaurants: RestaurantService,
    private _flash: FlashMessagesService) { }

  ngOnInit(): void {
    this.loadItems()
  }

  restaurant: RestaurantResponseClass;
  coordinates: [number, number]
  loadItems() {
    let rest_id;
    rest_id = this._router.routerState.snapshot.url.split('/')[2];

    this._restaurants.getRestaurantById(rest_id).subscribe((data: HttpRestaurantResponseClass) => {
      this.restaurant = data.data;
      this.coordinates = this.restaurant.location.coordinates
    }, error => {
      this._flash.show(error, { cssClass: 'alert-danger', timeout: 10000});
    });
    return ;
  }
  address: string;
  onAddressChange(event) {
    this.address = event;
  }


}
