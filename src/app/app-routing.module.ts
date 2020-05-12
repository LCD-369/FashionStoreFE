import { NgModule } from '@angular/core';
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
  {path:'home', component:HomeComponent},
  {path:'profile', canActivate: [AuthGuard], component:ProfileComponent},
  {path:'auth', component:AuthComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:PaymeComponent},
  {path:'browse/men', component:BrowseMenComponent},
  {path:'browse/women', component:BrowseWomenComponent},
  {path:'browse/children', component:BrowseChildrenComponent},
  {path:'browse/shoes', component:BrowseShoeComponent},
  {path:'browse/accessory', component:BrowseAccessoryComponent},
  {path:'*', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
