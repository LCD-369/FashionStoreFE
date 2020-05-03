import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberService } from '../services/member.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from '../auth/store/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  private userSub: Subscription;
  constructor(private memberService: MemberService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.userSub = this.store.select('auth').pipe(map(authState => authState.user))
      .subscribe(user => {
        this.user = !!user;
        this.memberService.findMemberByEmail(user.email).subscribe(res => {
          this.user = res;
          console.log(res);
        });
      });
  }


}
