import { Cart } from './../models/cart.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit{

  constructor(private store: Store<AppState>) { }

  items: Observable<Cart[]>
  // isItems: boolean = false;
  total: number = 0;
  deliveryFees: number = 79;
  taxPrice: number = .12;

  ngOnInit(): void {
    this.items = this.store.select('cart')
    this.items.subscribe(_observe=> {
      // this.isItems = true
      this.changeTotal()
    })
  }

  changeTotal() {
    this.total = Cart.getTotal();
  }

  getFinalTotal(){
    let sub_del = (this.total + this.deliveryFees)
    return ( sub_del * this.taxPrice) + sub_del;
  }
}
