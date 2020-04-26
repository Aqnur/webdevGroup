import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';
import { Product } from './product';
import { Category } from './category';
import { CATEGORIES } from './categories';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];

  constructor(private http: HttpClient) { }

  BASE_URL = 'http://127.0.0.1:8000';

  getProduct(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/products/${id}/`);
    // return of(PRODUCTS.find(product => product.id === id));
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.BASE_URL}/api/categories/`);
  }

  getCategory(id): Observable<Category> {
    return this.http.get<Category>(`${this.BASE_URL}/api/categories/${id}/`);
  }

  getProductofC(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${categoryId}/products`);
  }

  addview(id: number): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
}

