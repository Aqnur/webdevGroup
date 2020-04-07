import { Injectable } from '@angular/core';
import {Product} from './product';
import {PRODUCTS} from './products';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  constructor(private messageService: MessageService) { }
}
