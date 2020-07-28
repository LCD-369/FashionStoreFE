import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fromBottomEasing, fromTopEasing } from "ngx-router-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fromBottomEasing', [transition('* <=> auth', useAnimation(fromBottomEasing, {
      params: { enterTiming: '1', leaveTiming: '0', enterDelay: '0', leaveDelay: '0' }
    }))]),
    trigger('fromTopEasing', [transition('* <=> home', useAnimation(fromTopEasing, {
      params: { enterTiming: '1', leaveTiming: '0', enterDelay: '0', leaveDelay: '0' }
    }))]),
    trigger('fromBottomEasing', [transition('* <=> reg', useAnimation(fromBottomEasing, {
      params: { enterTiming: '1', leaveTiming: '0', enterDelay: '0', leaveDelay: '0' }
    }))]),
  ]
})
export class AppComponent implements OnInit {
  constructor(private store: Store<fromApp.AppState>) { }
  title = 'FashionStoreFE';

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }

  getState(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
