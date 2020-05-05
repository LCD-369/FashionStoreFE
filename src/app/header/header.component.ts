import { Component, OnInit, OnDestroy, ComponentFactoryResolver, ViewChild, AfterViewInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
  isAuthenticated = false;
  productsInCart = false;
  private userSub: Subscription;
  private closeSub: Subscription;
  private cartSub: Subscription;
  cartLength: number;
  smNav: boolean;
  // Subscription of the observer of the screen size
  watcher: Subscription;
  // The active media query (xs | sm | md | lg | xl)
  activeMediaQuery: string;

  constructor(private router: Router, private store: Store<fromApp.AppState>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private mediaObserver: MediaObserver) {

  }

  ngOnInit() {
    this.router.navigate(['home']);

    this.userSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });

    this.cartSub = this.store
      .select('cartItems')
      .pipe(map(cartState => cartState.cartItems))
      .subscribe(products => {
        this.productsInCart = !!products;
        this.cartLength = products.length;
        console.log(!products);
        console.log(!!products);
      });
  }

   ngAfterViewInit() {
     this.watcher = this.mediaObserver.media$.subscribe((change: MediaChange) => {
       this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
       if (change.mqAlias == 'xs' || change.mqAlias == 'sm') {
         this.loadMobileContent();
       } if (change.mqAlias == 'md' || change.mqAlias == 'lg' || change.mqAlias == 'xl')  {
         this.loadBrowserContent();
       }
     });
   }

  loadMobileContent() {
    this.smNav = true;
  }

  loadBrowserContent() {
    this.smNav = false;
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
    this.watcher.unsubscribe();
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
