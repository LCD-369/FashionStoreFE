import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

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
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
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

}
