import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {Category} from '../category'
import {IReview,IProduct } from '../shared/models/models';

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
  

  public text = '';
  public reviews: IReview[] = [];

  public product: IProduct;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private provider: ProviderService
    ){ }
    addToCart(product) {
      if (this.isLogged) {
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
    this.getReviews();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id)
      .subscribe(tovar => this.product = tovar);
  }
  getReviews() {
    const productId = +this.route.snapshot.paramMap.get('id');
    this.provider.getReviews(productId).then(res => {
      this.reviews = res;
    });
  }
  sendReview() {
    if (this.isLogged && this.text) {
      this.provider.postReview(this.product, this.text).then(res => {
        this.text = '';
        this.reviews.push(res);
      });
    }
  }



  }


