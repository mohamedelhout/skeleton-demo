import { Injectable } from '@angular/core';
import { HttpService } from '../../core/interceptors/http.service';
import { Observable } from 'rxjs';
import { ProductDto } from './dtos/get-products-dto';
import {
  CreateProductRequest,
  CreateProductResponse,
} from './dtos/create-product-dto';
import {
  UpdateProductRequest,
  UpdateProductResponse,
} from './dtos/update-product-dto-';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private controller = 'https://fakestoreapi.com/products';

  constructor(private httpService: HttpService) {}

  getProducts(): Observable<Array<ProductDto>> {
    return this.httpService.get<Array<ProductDto>>(`${this.controller}`);
  }

  getAllCategories(): Observable<Array<string>> {
    return this.httpService.get<Array<string>>(`${this.controller}/categories`);
  }

  create(request: CreateProductRequest): Observable<ProductDto> {
    return this.httpService.post<ProductDto>(`${this.controller}`, request);
  }

  update(request: UpdateProductRequest): Observable<UpdateProductResponse> {
    return this.httpService.put<UpdateProductResponse>(
      `${this.controller}/${request.id}`,
      request
    );
  }
}
