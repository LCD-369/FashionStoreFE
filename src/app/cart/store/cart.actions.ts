export const ADD_PRODUCT = 'ADD_PRODUCT';
import { Action } from '@ngrx/store';
import { Product } from '../../models/product';

export class AddProduct implements Action {

  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}


}
