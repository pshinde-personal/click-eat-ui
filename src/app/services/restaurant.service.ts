import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantClass } from '../models/restaurant.class';
import { Restaurant } from '../models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  headers = new HttpHeaders();
  backendUrl: string = 'https://thawing-caverns-75517.herokuapp.com/api/v1/restaurants';

  constructor(private _http: HttpClient) {}

  getAllRestaurants() {
    return this._http.get(`${this.backendUrl}/`, { headers: this.headers});
  }

  getRestaurantById(restaurant_id: string) {
    return this._http.get(`${this.backendUrl}/${restaurant_id}`, {headers: this.headers});
  }

  addNewRestaurant(restData: RestaurantClass) {
    return this._http.post(`${this.backendUrl}/`, restData, {headers: this.headers});
  }

  deleteRestaurant(restaurant_id: string) {
    return this._http.delete(`${this.backendUrl}/${restaurant_id}`, {headers: this.headers});
  }

  updateRestaurant(restaurant_id: string, updateData: Object) {
    return this._http.put(`${this.backendUrl}/${restaurant_id}`, updateData, {headers: this.headers});
  }
}
