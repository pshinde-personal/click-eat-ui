import { Cart } from './../models/cart.model'
import * as CartActions from './../actions/cart.actions'

export function reducer(state: Array<Cart> = [], action: CartActions.Actions) {
  switch(action.type) {
    case CartActions.ADD_TO_CART:
      state = state.filter(item => item._id !== action.payload._id);
      state = [...state, action.payload]
      return state
    case CartActions.REMOVE_FROM_CART:
      if(action.payload.quantity === 0) {
        state = state.filter(item => item._id !== action.payload._id);
        return state
      }
      state = state.filter(item => item._id !== action.payload._id);
      state = [...state, action.payload]
      return state
    default:
      return state;
  }
}