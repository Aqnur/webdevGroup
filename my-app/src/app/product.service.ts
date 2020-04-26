import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from './category';
import {HttpClient} from '@angular/common/http';
import {IProduct} from './shared/models/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8000';

  getProduct(id): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.BASE_URL}/api/products/${id}/`);
    // return of(PRODUCTS.find(product => product.id === id));
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getProductofC(categoryId: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.BASE_URL}/api/categories/${categoryId}/products`);
  }

  // addview(id: number): Observable<Product> {
  //   return of(PRODUCTS.find(product => product.id === id));
  // }
}

