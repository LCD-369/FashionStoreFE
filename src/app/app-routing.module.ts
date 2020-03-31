import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { BrowseComponent } from './browse/browse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { PageLoginFirstComponent } from './page-login-first/page-login-first.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'profile', canActivate: [AuthGuardService], component:ProfileComponent},
  {path:'cart', component:CartComponent},
  {path:'browse/:type/:gender/:category', component:BrowseComponent},
  {path:'*', component:PageNotFoundComponent},
  {path:'errorlogin', component:PageLoginFirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
