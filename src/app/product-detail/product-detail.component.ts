import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../models/product';
import * as ShoppingListActions from '../cart/store/cart.actions';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  @Input() currentProduct: Product;
  private closeSub: Subscription;

  constructor(
    private store: Store<{cartItemReducer: {cartIems: Product[]} }>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {

  }

  addProductToCart() {
    this.store.dispatch(new ShoppingListActions.AddProduct(this.currentProduct));
    this.showAlert();
  }

  private showAlert() {

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = 'Product added to cart.';

    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
