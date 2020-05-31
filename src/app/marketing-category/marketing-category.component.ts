import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marketing-category',
  templateUrl: './marketing-category.component.html',
  styleUrls: ['./marketing-category.component.css'],
  providers: [NgbCarouselConfig]
})
export class MarketingCategoryComponent implements OnInit {
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;

  constructor(private router: Router, config: NgbCarouselConfig) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
   }

  ngOnInit() {
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

}
