import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS } from './products';
import { Product } from './product';
import { Category } from './category';
import { CATEGORIES } from './categories';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];

  constructor() { }

 
  getProduct(id): Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
  }
  getCategory(): Observable<Category[]> {
    return of(CATEGORIES);
  }
 
  getProductofC(categoryId: number): Observable<Product[]> {
    return of(PRODUCTS.filter(product => product.categoryId === categoryId));
  }

  addview(id:number):Observable<Product> {
    return of(PRODUCTS.find(product => product.id === id));
    
  }


}

