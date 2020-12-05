import * as CartActions from './../../../actions/cart.actions';
import { AppState } from '../../../app.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FoodItemClassResponse, FoodItemsClassResponse } from 'src/app/models/foodItem.class';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-restaurant-detail-order',
  templateUrl: './restaurant-detail-order.component.html',
  styleUrls: ['./restaurant-detail-order.component.css']
})
export class RestaurantDetailOrderComponent implements OnInit {

  constructor(private _router: Router, 
    private _route: ActivatedRoute,
    private _flash: FlashMessagesService,
    private _food_item_service: FoodItemsService,
    private _orderService: OrdersService,
    private store: Store<AppState>
    ) { }

  food_items: FoodItemClassResponse;
  pagination: any;
  count: number;

  orderCount = [];
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

  add(item) {
    
    this.store.dispatch(new CartActions.AddCart(item))
    console.log();
    
  }

  getCount(id) {
    // let count = this._orderService.getCount(id);

  }

  remove(item) {
    this.store.dispatch(new CartActions.RemoveCart(item))

  }

}
