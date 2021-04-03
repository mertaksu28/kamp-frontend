import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Backend e istekte bulunmak, api çağrısı
import { Observable } from 'rxjs';
import { ListResponseModule } from '../modules/listResponseModule';
import { Product } from '../modules/product';
import { Category } from '../modules/category';
import { ResponseModule } from '../modules/ResponseModule';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44381/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModule<Product>> {
    let newPath = this.apiUrl + 'products/getall';
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }
  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModule<Product>> {
    let newPath =
      this.apiUrl + 'products/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModule<Product>>(newPath);
  }

  add(product: Product): Observable<ResponseModule> {
    return this.httpClient.post<ResponseModule>(
      this.apiUrl + 'products/add',
      product
    );
  }
}
