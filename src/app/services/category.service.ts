import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Backend e istekte bulunmak, api çağrısı
import { Observable } from 'rxjs';
import { ListResponseModule } from '../modules/listResponseModule';
import { Category } from '../modules/category';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = "https://localhost:44381/api/categories/getall";

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModule<Category>>{
    this.httpClient;
    return this.httpClient.get<ListResponseModule<Category>>(this.apiUrl); 
  }
}
