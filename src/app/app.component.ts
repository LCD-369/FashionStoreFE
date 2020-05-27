import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fromLeftEasing } from "ngx-router-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fromLeftEasing', [transition('* => *', useAnimation(fromLeftEasing, {
      params: { enterTiming: '1', leaveTiming: '1', enterDelay: '0', leaveDelay: '0' }
    }
    ))])
  ]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) { }
  title = 'FashionStoreFE';


  ngOnInit() {

    this.store.dispatch(new AuthActions.AutoLogin());
  }

  // prepareRoute(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData;
  // }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
