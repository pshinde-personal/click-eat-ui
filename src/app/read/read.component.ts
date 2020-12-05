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
export class ReadComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  items: Observable<Cart[]>

  ngOnInit(): void {
    this.items = this.store.select('cart')
    console.log(this.items);
    
  }

}
