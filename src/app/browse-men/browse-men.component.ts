import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-men',
  templateUrl: './browse-men.component.html',
  styleUrls: ['./browse-men.component.css']
})
export class BrowseMenComponent implements OnInit {
  products: Array<Product>;
  showChildComponent: boolean;
  ShowParentComponent: boolean;
  pageEvent: PageEvent;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  currentProduct: Product;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.showChildComponent = false;
    this.ShowParentComponent = true;
    this.productService.getProductsByCatGen('Male', 'Adult').subscribe(res => {
      this.products = res;
    });
  }

  onLoadDetails(product: Product) {
    this.currentProduct = product;
    this.showChildComponent = true;
    this.ShowParentComponent = false;
  }

}
