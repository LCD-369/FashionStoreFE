import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { trigger, transition, useAnimation } from "@angular/animations";
import { fromBottomEasing, fromLeftEasing, fromTopEasing } from "ngx-router-animations";


@Component({
  selector: 'app-browse-product',
  templateUrl: './browse-product.component.html',
  styleUrls: ['./browse-product.component.scss'],
  animations: [
    trigger('fromBottomEasing', [transition('* <=> *', useAnimation(fromBottomEasing, {
      params: { enterTiming: '2', leaveTiming: '1', enterDelay: '0', leaveDelay: '0' }
    }))]),
    trigger('fromTopEasing', [transition('* <=> *', useAnimation(fromTopEasing, {
      params: { enterTiming: '2', leaveTiming: '1', enterDelay: '0', leaveDelay: '0' }
    }))]),
    trigger('fromLeftEasing', [transition('* <=> *', useAnimation(fromLeftEasing, {
      params: { enterTiming: '2', leaveTiming: '1', enterDelay: '0', leaveDelay: '0' }
    }))])
  ]
})
export class BrowseProductComponent implements OnInit {
  routedata$: Observable<any>;
  gender: string;
  category: string;
  pageHeader: string;
  products: Array<Product>;
  showChildComponent: boolean;
  ShowParentComponent: boolean;
  length: number;
  currentProduct: Product;
  isLoading = true;
  page: number = 1;


  constructor(private productService: ProductService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.data.subscribe(data => {
      this.gender = data.state1;
      this.category = data.state2;
      this.pageHeader = data.state3;
    })

    this.showChildComponent = false;
    this.ShowParentComponent = true;

    if(this.gender == 'NA') {
      this.productService.getProductsByCategory(this.category).subscribe(res => {
        this.products = res;
        this.length = res.length;
        this.isLoading = false;
      })
    } else {
      this.productService.getProductsByCatGen(this.gender, this.category).subscribe(res => {
        this.products = res;
        this.length = res.length;
        this.isLoading = false;
      })
    }




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
