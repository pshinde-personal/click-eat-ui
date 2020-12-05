import { Action } from '@ngrx/store'
import { Cart } from './../models/cart.model'
import * as CartActions from './../actions/cart.actions'

const initialState: Cart = {
  name: "",
  details: "",
  slug: "",
  price: 0,
  isSpecial: false,
  discount: 0,
  domain: ["Veg"],
  category: [""],
  rating: 0,
  photo: "",
  restaurant: "",
  user: "",
}

export function reducer(state: Cart[] = [initialState], action: CartActions.Actions) {

  switch(action.type) {

    case "AddToCart":
      console.log('add', action.payload);
      
      if (state.indexOf(action.payload)) {
        const i = state.indexOf(action.payload);
        state[i].count += 1; 
        return [...state];
      }
      action.payload.count = 1;
      return [...state, action.payload];
      
    case "RemoveFromCart":
      if (state.indexOf(action.payload)) {
        action.payload.count -= 1;
        return 
      }
    default:
      return state;
  }
}