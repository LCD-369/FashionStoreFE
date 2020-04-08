import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { MarketingCategoryComponent } from './marketing-category/marketing-category.component';
import { FeaturetteDividerComponent } from './featurette-divider/featurette-divider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BrowseComponent } from './browse/browse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { ProductService } from './services/product.service';
import { OrderService } from './services/order.service';
import { MemberService } from './services/member.service';
import { CouponService } from './services/coupon.service';
import { PageLoginFirstComponent } from './page-login-first/page-login-first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseWomenComponent } from './browse-women/browse-women.component';
import { BrowseMenComponent } from './browse-men/browse-men.component';
import { BrowseChildrenComponent } from './browse-children/browse-children.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { cartItemReducer } from './cart/store/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    ProfileComponent,
    CartComponent,
    MarketingCategoryComponent,
    FeaturetteDividerComponent,
    HeaderComponent,
    FooterComponent,
    JumbotronComponent,
    BrowseComponent,
    PageNotFoundComponent,
    PageLoginFirstComponent,
    BrowseWomenComponent,
    BrowseMenComponent,
    BrowseChildrenComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatPaginatorModule,
    StoreModule.forRoot({cartItemReducer: cartItemReducer})
  ],
  providers: [AuthService, AuthGuardService, OrderService, ProductService, MemberService, CouponService],
  bootstrap: [AppComponent]
})
export class AppModule { }
