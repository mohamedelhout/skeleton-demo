import { Injectable } from '@angular/core';
import { ProductDto } from '../../../services/products/dtos/get-products-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductsDataService {
  private newCreatedProduct!: ProductDto | undefined;

  constructor() {}

  setNewCreatedProduct(product: ProductDto) {
    this.newCreatedProduct = product;
  }

  getNewCreatedProduct(): ProductDto | undefined {
    return this.newCreatedProduct;
  }

  reset() {
    this.newCreatedProduct = undefined;
  }
}
