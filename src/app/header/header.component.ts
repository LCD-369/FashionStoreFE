import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['home']);
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

}
