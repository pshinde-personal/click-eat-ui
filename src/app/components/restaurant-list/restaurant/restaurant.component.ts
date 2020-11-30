import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/models/restaurant.model';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  @Input() restaurantDetails: Restaurant;
  constructor(private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect() {
    this._router.navigate([this.restaurantDetails._id], {relativeTo: this._route});
  }
}
