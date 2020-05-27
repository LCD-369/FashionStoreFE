import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import  { trigger, transition, useAnimation }  from  "@angular/animations";
import  { fromLeftEasing }  from  "ngx-router-animations";

@Component({
  selector: 'app-browse-women',
  templateUrl: './browse-women.component.html',
  styleUrls: ['./browse-women.component.css'],
  animations: [
   trigger('fromLeftEasing', [ transition('* => *', useAnimation(fromLeftEasing,{
   	params: {enterTiming: '1', leaveTiming: '1', enterDelay: '0', leaveDelay: '0'}
   	}
   ))])
]
})
export class BrowseWomenComponent implements OnInit {
  products: Array<Product>;
  showChildComponent: boolean;
  ShowParentComponent: boolean;
  length = 100;
  currentProduct: Product;
  page: number = 1;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.showChildComponent = false;
    this.ShowParentComponent = true;
    this.productService.getProductsByCatGen('Female', 'Adult').subscribe(res => {
      this.products = res;
      this.length = res.length;
    });
  }

  onLoadDetails(product: Product) {
    this.currentProduct = product;
    this.showChildComponent = true;
    this.ShowParentComponent = false;
  }

  onClose() {
    this.showChildComponent = false;
    this.ShowParentComponent = true;
  }
}
