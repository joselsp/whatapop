import { Pipe, PipeTransform } from '@angular/core';

import { Product } from "./product";
import { ProductOrder } from './product-order'

@Pipe({
  name: 'productOrder'
})
export class ProductOrderPipe implements PipeTransform {

  transform(products: Product[], sortType: ProductOrder): Product[] {

    let ordered: Product[];
    let type: string;
    if (sortType) {
      type = sortType.sortType;
    }

    if (products) {

      if (type === 'alpAsc' || type === 'alpDesc') {

        ordered = products.sort((productA: Product, productB: Product): number => {

          if (type === 'alpDesc') {
            let tempSwichProduct = productA;
            productA = productB;
            productB = tempSwichProduct;
          }

          let resultado: number;

          if (productA.name > productB.name) {
            resultado = 1;
          }
          else if (productA.name < productB.name) {
            resultado = -1;
          }
          else {
            resultado = 0;
          }
          return resultado;
        });
      }
      else if (type === 'priceAsc' || type === 'priceDesc') {

        ordered = products.sort((productA: Product, productB: Product): number => {

          if (type === 'priceDesc') {
            let tempSwichProduct = productA;
            productA = productB;
            productB = tempSwichProduct;
          }

          let resultado: number;

          if (productA.price > productB.price) {
            resultado = 1;
          }
          else if (productA.price < productB.price) {
            resultado = -1;
          }
          else {
            resultado = 0;
          }
          return resultado;
        });
      }
      else {
        ordered = products;
      }
      return ordered;
    }
  }
}
