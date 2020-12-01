import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { pipe } from 'rxjs';
import { FoodItemClassResponse, FoodItemsClassResponse } from 'src/app/models/foodItem.class';
import { FoodItemsService } from 'src/app/services/food-items.service';

@Component({
  selector: 'app-restaurant-detail-order',
  templateUrl: './restaurant-detail-order.component.html',
  styleUrls: ['./restaurant-detail-order.component.css']
})
export class RestaurantDetailOrderComponent implements OnInit {

  constructor(private _router: Router, 
    private _route: ActivatedRoute,
    private _flash: FlashMessagesService,
    private _food_item_service: FoodItemsService) { }

  food_items: FoodItemClassResponse;
  pagination: any;
  count: number;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    //  get restaurant id from url by spliting it
    let rest_id;
    rest_id = this._router.routerState.snapshot.url.split('/')[2];

    this._food_item_service.getFoodItemsOfRestaurant(rest_id).subscribe((data: FoodItemsClassResponse) => {
      this.food_items = data.data;
      this.pagination = data.pagination;
      this.count = data.count;
    }, error => {
      this._flash.show(error, { cssClass: 'alert-danger', timeout: 10000});
    });
    return ;
  }
}
