import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CartComponent } from './cart/cart.component';
import { BrowseChildrenComponent } from './browse-children/browse-children.component';
import { BrowseMenComponent } from './browse-men/browse-men.component';
import { BrowseWomenComponent } from './browse-women/browse-women.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { PageLoginFirstComponent } from './page-login-first/page-login-first.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'profile', canActivate: [AuthGuardService], component:ProfileComponent},
  {path:'cart', component:CartComponent},
  {path:'browse/men', component:BrowseMenComponent},
  {path:'browse/women', component:BrowseWomenComponent},
  {path:'browse/children', component:BrowseChildrenComponent},
  {path:'*', component:PageNotFoundComponent},
  {path:'errorlogin', component:PageLoginFirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
