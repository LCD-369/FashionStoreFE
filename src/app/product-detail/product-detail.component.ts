import { Component, OnInit, Input, Output, EventEmitter, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import * as ShoppingListActions from '../cart/store/cart.actions';
import { Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;
  @Input() currentProduct: Product;
  @Output() close: EventEmitter<any> = new EventEmitter();
  private closeSub: Subscription;
  faAngleRight = faAngleRight;
  constructor(
    private store: Store<{cartItemReducer: {cartIems: Product[]} }>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router
  ) { }

  ngOnInit() {

  }

  addProductToCart() {
    this.store.dispatch(new ShoppingListActions.AddProduct(this.currentProduct));
    this.showAlert();
  }

  onLoadBrowse() {
    this.close.emit();
  }

  private showAlert() {

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = 'Product added to cart';

    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
