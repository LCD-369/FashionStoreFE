import { Product } from '../../models/product';
import * as ShoppingListActions from './cart.actions';

const initialState = {
  cartItems: []
};

export function cartItemReducer(state = initialState, action: ShoppingListActions.AddProduct) {
  switch (action.type) {
    case ShoppingListActions.ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
}
