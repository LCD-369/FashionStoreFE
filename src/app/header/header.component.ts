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
    this.router.navigate(['browse', '', 'Male', 'Adult']);
  }

  onLoadFemaleBrowse() {
    this.router.navigate(['browse', '', 'Female', 'Adult']);
  }

  onLoadChildrenBrowse() {
    this.router.navigate(['browse', '', '', 'Children']);
  }

  onLoadShoesBrowse() {
    this.router.navigate(['browse', 'Shoe', '', '']);
  }

  onLoadAccessoryBrowse() {
    this.router.navigate(['browse', 'Accessory', '', '']);
  }

  onLoadProfile() {
    this.router.navigate(['profile']);
  }

  onLoadCart() {
    this.router.navigate(['cart']);
  }

}
