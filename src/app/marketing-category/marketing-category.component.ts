import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-category',
  templateUrl: './marketing-category.component.html',
  styleUrls: ['./marketing-category.component.css']
})
export class MarketingCategoryComponent implements OnInit {

  showHome: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
    this.showHome = false;
  }

  onLoadMaleBrowse() {
    this.router.navigate(['browse', '', 'Male', 'Adult']);
  }

  onLoadFemaleBrowse() {
    this.router.navigate(['browse', '', 'Female', 'Adult']);
  }

  onLoadChildrenBrowse() {
    this.router.navigate(['browse', '', '', 'Children']);
  }

}
