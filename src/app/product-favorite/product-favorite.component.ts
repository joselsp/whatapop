import { Component, Input, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'product-favorite',
  templateUrl: './product-favorite.component.html',
  styleUrls: ['./product-favorite.component.css']
})
export class ProductFavoriteComponent implements OnInit{

  @Input() product: Product;

  ngOnInit(): void {
    this.productChanged = this.product;
  }
  productChanged: Product;

  constructor(
    private _productService: ProductService,    
    private _router: Router) { }

  favoriteButtonClick(): void{   
    this._productService.setFavoriteProduct(this.productChanged.id, this.productChanged.favorite).subscribe((productoCh: Product) => {
        this.productChanged = productoCh;
      });
  }

  isFav() {
    return this.productChanged.favorite;
  }
}
