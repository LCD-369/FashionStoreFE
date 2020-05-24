import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';
import  { trigger, transition, useAnimation }  from  "@angular/animations";
import  { fromTopEasing }  from  "ngx-router-animations";

@Component({
  selector: 'app-browse-children',
  templateUrl: './browse-children.component.html',
  styleUrls: ['./browse-children.component.css'],
  animations: [
   trigger('fromTopEasing', [ transition('* => *', useAnimation(fromTopEasing,{
   	params: {enterTiming: '1', leaveTiming: '1', enterDelay: '0', leaveDelay: '0'}
   	}
   ))])
]
})
export class BrowseChildrenComponent implements OnInit {
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
    this.productService.getProductsByCatGen('Male', 'Children').subscribe(res => {
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
