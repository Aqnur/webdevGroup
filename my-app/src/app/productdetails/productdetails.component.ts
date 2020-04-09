import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {Category} from '../category'
import { CartService } from '../cart.service';
import { ProviderService } from '../shared/services/provider.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public isLogged = false;
  categories: Category[];
  product: Product;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private provider: ProviderService
    ){ }
    addToCart(product) {
      if (this.isLogged){
      this.cartService.addToCart(product);
      }
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }
    this.getProduct();
    this.addview();
 
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(tovar => this.product = tovar);
  }
  addview(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.addview(id)
  }
 

}
