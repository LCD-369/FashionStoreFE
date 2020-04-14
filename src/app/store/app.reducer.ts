import { ActionReducerMap } from '@ngrx/store';

import * as fromCartReducer from '../cart/store/cart.reducer';
import * as fromAuthReducer from '../auth/store/auth.reducer';

export interface AppState {
  cartItems: fromCartReducer.State;
  auth: fromAuthReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  cartItems: fromCartReducer.cartItemReducer,
  auth: fromAuthReducer.authReducer
};
