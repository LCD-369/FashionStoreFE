import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import * as fromApp from './store/app.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { MarketingCategoryComponent } from './marketing-category/marketing-category.component';
import { FeaturetteDividerComponent } from './featurette-divider/featurette-divider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { MemberService } from './services/member.service';
import { CouponService } from './services/coupon.service';
import { BrowseWomenComponent } from './browse-women/browse-women.component';
import { BrowseMenComponent } from './browse-men/browse-men.component';
import { BrowseChildrenComponent } from './browse-children/browse-children.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthEffects } from './auth/store/auth.effects';
import { AuthComponent } from './auth/auth.component';
import { BrowseShoeComponent } from './browse-shoe/browse-shoe.component';
import { BrowseAccessoryComponent } from './browse-accessory/browse-accessory.component';
import { LogoComponent } from './logo/logo.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaymeComponent } from './payme/payme.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CartComponent,
    MarketingCategoryComponent,
    FeaturetteDividerComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    PageNotFoundComponent,
    BrowseWomenComponent,
    BrowseMenComponent,
    BrowseChildrenComponent,
    ProductDetailComponent,
    AuthComponent,
    BrowseShoeComponent,
    BrowseAccessoryComponent,
    LogoComponent,
    PaymeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromApp.appReducer),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
    CoreModule,
    NgxPaginationModule,
    CollapseModule.forRoot(),
    FontAwesomeModule,
    NgbModule
  ],
  providers: [OrderService, ProductService, MemberService, CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
