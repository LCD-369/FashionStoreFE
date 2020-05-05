import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-women',
  templateUrl: './browse-women.component.html',
  styleUrls: ['./browse-women.component.css']
})
export class BrowseWomenComponent implements OnInit {
  products: Array<Product>;
  showChildComponent: boolean;
  ShowParentComponent: boolean;
  isLoading: boolean;
  length = 100;
  currentProduct: Product;
  page: number = 1;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.showChildComponent = false;
    this.ShowParentComponent = true;
    this.isLoading = true;
    this.productService.getProductsByCatGen('Female', 'Adult').subscribe(res => {
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
}
