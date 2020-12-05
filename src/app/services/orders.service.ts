import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  orderCountArray: Array<{id: string, count?: number}> = [];

  addOrderToList(id) {
    let i = this.orderCountArray.findIndex(idx => idx.id == id);
    if (i === -1) {
      this.orderCountArray.push({ id , count: 1})
      return this.orderCountArray;
    }
    this.orderCountArray[i].count += 1;
    return this.orderCountArray;
  }

  getCount(id) {
    this.orderCountArray.map(item=> {
      if (item.id === id) {
        return item.count;
      }
      return 0;
    })
  }

  removeOrderFromList(id)  {
    let i = this.orderCountArray.findIndex(idx => idx.id == id);
    if (i !== -1) {
      if(this.orderCountArray[i].count > 0) {
        this.orderCountArray[i].count -= 1;
      }
      if(this.orderCountArray[i].count == 0) {
        delete this.orderCountArray[i];
      }
    }
    return this.orderCountArray;
  }

}
