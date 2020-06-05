import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import  { trigger, transition, useAnimation }  from  "@angular/animations";
import  { fromBottomEasing }  from  "ngx-router-animations";

@Component({
  selector: 'app-browse-men',
  templateUrl: './browse-men.component.html',
  styleUrls: ['./browse-men.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [
   trigger('fromBottomEasing', [ transition('* => *', useAnimation(fromBottomEasing,{
   	params: {enterTiming: '2', leaveTiming: '0', enterDelay: '0', leaveDelay: '0'}
   	}
   ))])
]
})
export class BrowseMenComponent implements OnInit {
  products: Array<Product>;
  showChildComponent: boolean;
  ShowParentComponent: boolean;
  length = 100;
  currentProduct: Product;
  isLoading = true;
  page: number = 1;
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.showChildComponent = false;
    this.ShowParentComponent = true;
    this.productService.getProductsByCatGen('Male', 'Adult').subscribe(res => {
      this.products = res;
      this.length = res.length;
      this.isLoading = false;
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
