import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-marketing-category',
  templateUrl: './marketing-category.component.html',
  styleUrls: ['./marketing-category.component.css']
})
export class MarketingCategoryComponent implements OnInit {
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  year: number = new Date().getFullYear();
  constructor(private router: Router) {}

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
