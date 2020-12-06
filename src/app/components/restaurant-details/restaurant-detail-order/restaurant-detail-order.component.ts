import * as CartActions from 'src/app/actions/cart.actions';
import { AppState } from 'src/app/app.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FoodItemsClassResponse } from 'src/app/models/foodItem.class';
import { FoodItemsService } from 'src/app/services/food-items.service';
import { Cart } from 'src/app/models/cart.model';

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
    private store: Store<AppState>
    ) { }

  pagination: any;
  count: number;

  orderCount = [];
  ngOnInit(): void {
    this.loadItems();
  }
  food_items : Cart[] = [];

  loadItems() {
    let rest_id;
    rest_id = this._router.routerState.snapshot.url.split('/')[2];

    this._food_item_service.getFoodItemsOfRestaurant(rest_id).subscribe((data: FoodItemsClassResponse) => {
      this.food_items = data.data;
    }, error => {
      this._flash.show(error, { cssClass: 'alert-danger', timeout: 10000});
    });
    return ;
  }

  add(item: Cart) {
    let index = this.food_items.indexOf(item);
    this.food_items = this.food_items.filter(i=> item._id !== i._id)
    let newQuantity = item.quantity + 1;
    let newItem: Cart = {
      ...item, 
      quantity: newQuantity,
      subtotal: newQuantity * item.price,
    };
    
    Cart.setAddTotal(item.price);
    this.food_items.splice(index, 0, newItem);
    this.store.dispatch(new CartActions.AddCart(newItem));
  }

  remove(item: Cart) {
    if(item.quantity> 0) {
      let index = this.food_items.indexOf(item);
      this.food_items = this.food_items.filter(i=> item._id !== i._id);
      
      let newQuantity = item.quantity - 1;
      let newItem: Cart = {
        ...item, 
        quantity: newQuantity,
        subtotal: item.subtotal - item.price
      };
      Cart.setReoveFromTotal(item.price);
      this.food_items.splice(index, 0, newItem);
      this.store.dispatch(new CartActions.RemoveCart(newItem));
    }
  }

}
