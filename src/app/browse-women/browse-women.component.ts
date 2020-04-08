import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-browse-women',
  templateUrl: './browse-women.component.html',
  styleUrls: ['./browse-women.component.css']
})
export class BrowseWomenComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsByCatGen('Female', 'Adult').subscribe(res => {
      this.products = res;
    });
  }

}
