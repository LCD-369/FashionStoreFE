import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-browse-children',
  templateUrl: './browse-children.component.html',
  styleUrls: ['./browse-children.component.css']
})
export class BrowseChildrenComponent implements OnInit {
  products: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductsByCategory('Children').subscribe(res => {
      this.products = res;
    });
  }

}
