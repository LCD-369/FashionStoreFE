import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Observable<{cartIems: Product[] }>;
  constructor(private store: Store<{cartItemReducer: {cartIems: Product[]} }>) { }

  ngOnInit() {
      this.products = this.store.select('cartItemReducer');
  }

}
