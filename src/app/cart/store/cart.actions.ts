import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export const CHECK_PRODUCTS = 'CHECK_PRODUCTS';


export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) { }
}

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(public payload: number) { }
}

export class UpdateProducts implements Action {
  readonly type = UPDATE_PRODUCTS;

  constructor(public payload: { index: number, product: Product }) { }
}

export class CheckProducts implements Action {
  readonly type = CHECK_PRODUCTS;

}

export type ShoppingCartActions = AddProduct | RemoveProduct | UpdateProducts | CheckProducts;
