import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as ShoppingListActions from '../cart/store/cart.actions';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.min.css']
})
export class CartComponent implements OnInit {
  items: Observable<{ cartItems: Product[] }>;
  element: any;
  faShoppingCart = faShoppingCart;
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
      this.items = this.store.select('cartItems');
      this.items.forEach(element => {
        this.element = element;
      });
  }

  removeFromCart(index: number) {
    this.store.dispatch(new ShoppingListActions.RemoveProduct(index));
  }

  checkIfCartIsEmpty() {
    if(this.element.cartItems.length==0) {
      return true;
    } else {
      return false;
    }
  }

  startCheckout() {
    this.router.navigate(['checkout']);
  }

}
