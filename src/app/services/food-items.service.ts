import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodItemsService {

  constructor(private _http: HttpClient) { }

  backendUrl: string = 'https://thawing-caverns-75517.herokuapp.com/api/v1';

  getAllFoodItems() {
    return this._http.get(`${this.backendUrl}/food-items`);
  }

  getFoodItemsOfRestaurant(rest_id: string) {
    return this._http.get(`${this.backendUrl}/restaurants/${rest_id}/food-items`);
  }

  getFoodItemById(food_id: string) {
    return this._http.get(`${this.backendUrl}/food-items/${food_id}`);
  }

  postFoodItem(food_item_data: any) {
    return this._http.post(`${this.backendUrl}/food-items`, food_item_data);
  }
}
