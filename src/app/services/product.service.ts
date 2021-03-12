import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Backend e istekte bulunmak, api çağrısı
import { ProductResponseModule } from '../modules/productResponseModel';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44381/api/products/getall';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ProductResponseModule> {
    this.httpClient;
    return this.httpClient.get<ProductResponseModule>(this.apiUrl);
  }
}
