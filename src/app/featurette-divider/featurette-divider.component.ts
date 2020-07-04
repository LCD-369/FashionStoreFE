import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featurette-divider',
  templateUrl: './featurette-divider.component.html',
  styleUrls: ['./featurette-divider.component.scss']
})
export class FeaturetteDividerComponent implements OnInit {
  faAngleUp = faAngleUp;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadHome() {
    this.router.navigate(['home']);
  }
}
