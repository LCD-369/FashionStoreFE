import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-accessory',
  templateUrl: './browse-accessory.component.html',
  styleUrls: ['./browse-accessory.component.css']
})
export class BrowseAccessoryComponent implements OnInit {
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
    this.productService.getProductsByCatGen('Male', 'Adult').subscribe(res => {
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
