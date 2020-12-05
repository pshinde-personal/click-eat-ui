import { Action } from '@ngrx/store'
import { Cart } from './../models/cart.model'

export const ADD_TO_CART          = 'AddToCart'
export const REMOVE_FROM_CART     = 'RemoveFromCart'

export class AddCart implements Action {
  readonly type = ADD_TO_CART

  constructor(public payload: Cart) {}
}

export class RemoveCart implements Action {
  readonly type = REMOVE_FROM_CART

  constructor(public payload: Cart) {}
}

export type Actions = AddCart | RemoveCart