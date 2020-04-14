import { Product } from '../../models/product';
import * as ShoppingListActions from './cart.actions';

export interface State {
  cartItems: Product[];
};

const initialState: State = {
  cartItems: [],
};

export function cartItemReducer(state = initialState, action: ShoppingListActions.ShoppingCartActions) {
  switch (action.type) {
    case ShoppingListActions.ADD_PRODUCT:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    case ShoppingListActions.REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter((prod, prodIndex) => {
          return prodIndex !== action.payload;
        })
      };
    case ShoppingListActions.UPDATE_PRODUCTS:
      const product = state.cartItems[action.payload.index];
      const updatedProduct = {
        ...product,
        ...action.payload.product
      };
      const updatedProducts = [...state.cartItems];
      updatedProducts[action.payload.index] = updatedProduct;
      return {
        ...state,
        cartItems: updatedProducts
      };
    case ShoppingListActions.CHECK_PRODUCTS:
      return {
        ...state
      }
    default:
      return state;
  }
}
