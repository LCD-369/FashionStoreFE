import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { PaymeComponent } from './payme/payme.component';
import { BrowseChildrenComponent } from './browse-children/browse-children.component';
import { BrowseMenComponent } from './browse-men/browse-men.component';
import { BrowseWomenComponent } from './browse-women/browse-women.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthComponent } from './auth/auth.component';
import { BrowseShoeComponent } from './browse-shoe/browse-shoe.component';
import { BrowseAccessoryComponent } from './browse-accessory/browse-accessory.component';

const routes: Routes = [
  {path:'home', component:HomeComponent, data: {state:  'home'}},
  {path:'profile', canActivate: [AuthGuard], component:ProfileComponent, data: {state:  'profile'}},
  {path:'auth', component:AuthComponent, data: {state:  'auth'}},
  {path:'cart', component:CartComponent, data: {state:  'cart'}},
  {path:'checkout', component:PaymeComponent, data: {state:  'checkout'}},
  {path:'browse/men', component:BrowseMenComponent, data: {state:  'browsemen'}},
  {path:'browse/women', component:BrowseWomenComponent, data: {state:  'browsewomen'}},
  {path:'browse/children', component:BrowseChildrenComponent, data: {state:  'browsechildren'}},
  {path:'browse/shoes', component:BrowseShoeComponent, data: {state:  'browseshoes'}},
  {path:'browse/accessory', component:BrowseAccessoryComponent, data: {state:  'accessory'}},
  {path:'*', component:PageNotFoundComponent, data: {state:  '*'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true},)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
