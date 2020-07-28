import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MarketingCategoryComponent } from './marketing-category/marketing-category.component';
import { FeaturetteDividerComponent } from './featurette-divider/featurette-divider.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PaymeComponent } from './payme/payme.component';
import { BrowseProductComponent } from './browse-product/browse-product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'home', component: MarketingCategoryComponent, data: { animation: 'home' } },
  { path: 'featurette', component: FeaturetteDividerComponent, data: { animation: 'reg' } },
  { path: 'profile', canActivate: [AuthGuard], component: ProfileComponent, data: { animation: 'reg' } },
  { path: 'auth', component: AuthComponent, data: { animation: 'auth' } },
  { path: 'cart', component: CartComponent, data: { animation: 'reg' } },
  { path: 'checkout', component: PaymeComponent, data: { animation: 'reg' } },
  { path: 'browse/men', component: BrowseProductComponent, data: {  animation: 'reg', state1: 'Male', state2: 'Adult', state3: 'MEN APPAREL' } },
  { path: 'browse/women', component: BrowseProductComponent, data: {  animation: 'reg', state1: 'Female', state2: 'Adult', state3: 'WOMEN APPAREL' } },
  { path: 'browse/children', component: BrowseProductComponent, data: {  animation: 'reg', state1: 'NA', state2: 'Children', state3: 'CHILDREN APPAREL' } },
  { path: 'browse/shoes', component: BrowseProductComponent, data: {  animation: 'reg', state1: 'NA', state2: 'Shoe', state3: 'SHOES' } },
  { path: 'browse/accessory', component: BrowseProductComponent, data: {  animation: 'reg', state1: 'NA', state2: 'Accessory', state3: 'ACCESSORIES' } },
  { path: '*', component: PageNotFoundComponent, data: { animation: '*' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }, )],
  exports: [RouterModule],
})
export class AppRoutingModule { }
