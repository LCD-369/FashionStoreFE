import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  type: string;
  gender: string;
  category: string;
  products: Array<Product>;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.type = null;
    this.gender = null;
    this.category = null;
    this.route.params.subscribe(
      (params: Params) => {
        this.type = params['type'];
        this.gender = params['gender'];
        this.category = params['category'];
      }
    );
    this.getQueryInfo(this.gender, this.category);
  }

  getQueryInfo(gender: string, category: string) {
    let gen = gender;
    let cat = category;
    switch (cat) {

         case undefined:
              this.productService.getProducts().subscribe(res => {
                this.products = res;
              });
            break;

         case "Children":
              this.productService.getProductsByCategory(this.category).subscribe(res => {
                this.products = res;
              });
            break;

         case "Adult":
              this.productService.getProductsByCatGen(this.gender, this.category).subscribe(res => {
                this.products = res;
              })
            break;

         default:
         this.productService.getProducts().subscribe(res => {
           this.products = res;
         });
            break;
  }
}

}
