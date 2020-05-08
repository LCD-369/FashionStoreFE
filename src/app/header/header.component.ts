import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;
  isAuthenticated = false;
  productsInCart = false;
  private userSub: Subscription;
  private closeSub: Subscription;
  private cartSub: Subscription;
  cartLength: number;
  faShoppingCart = faShoppingCart;
  faUser = faUser;

  constructor(private router: Router, private store: Store<fromApp.AppState>,
    private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.router.navigate(['home']);

    this.userSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
      });

    this.cartSub = this.store
      .select('cartItems')
      .pipe(map(cartState => cartState.cartItems))
      .subscribe(products => {
        this.productsInCart = !!products;
        this.cartLength = products.length;
      });
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    this.showAlert();
  }

  onLoadHome() {
    this.router.navigate(['/home']);
  }

  onLoadMaleBrowse() {
    this.router.navigate(['browse/men']);
  }

  onLoadFemaleBrowse() {
    this.router.navigate(['browse/women']);
  }

  onLoadChildrenBrowse() {
    this.router.navigate(['browse/children']);
  }

  onLoadShoesBrowse() {
    this.router.navigate(['browse/shoes']);
  }

  onLoadAccessoryBrowse() {
    this.router.navigate(['browse/accessory']);
  }

  onLoadProfile() {
    this.router.navigate(['profile']);
  }

  onLoadCart() {
    this.router.navigate(['cart']);
  }

  onLoadLogin() {
    this.router.navigate(['auth']);
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  private showAlert() {

    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = 'User successfully logged off.';

    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

}
