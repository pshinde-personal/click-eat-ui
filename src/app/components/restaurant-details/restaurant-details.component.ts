import { RestaurantResponse } from 'src/app/models/restaurant.model';
import { Restaurant } from './../../models/restaurant.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { RestaurantClass, RestaurantResponseClass } from 'src/app/models/restaurant.class';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.css']
})
export class RestaurantDetailsComponent implements OnInit {

  constructor(private _restaurant: RestaurantService, 
    private _router: Router, 
    private _route: ActivatedRoute) { }
    
  data: RestaurantResponseClass;

  ngOnInit(): void {
    this.loadData();
    
  }

  loadData() {
    let id: string; 
    this._route.paramMap.subscribe(params => {
      id = params.get('id')
    })
    this._restaurant.getRestaurantById(id).subscribe((data: SingleRestaurantResponse)=>{
      console.log(data.data);
      
      this.data = data.data;
    });
    return ;
  }

  onOverviewSelect() {
    this._router.navigate(["overview"], {relativeTo: this._route});
    return ;
  }

  onOrderSelect() {
    this._router.navigate(["order"], {relativeTo: this._route});
    return ;
  }
}

class SingleRestaurantResponse {
  success: string
  data: RestaurantResponseClass
} 