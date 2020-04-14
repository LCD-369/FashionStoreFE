import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import * as ShoppingListActions from '../cart/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() currentProduct: Product;
  
  constructor(
    private store: Store<{cartItemReducer: {cartIems: Product[]} }>
  ) { }

  ngOnInit() {

  }

  addProductToCart() {
    this.store.dispatch(new ShoppingListActions.AddProduct(this.currentProduct));
  }

}
