import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ProductService} from '../product.service';
import {Product} from '../product';
import {Category} from '../category'
import { CartService } from '../cart.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  categories: Category[];
  product: Product;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
    ){ }
    addToCart(product) {
      this.cartService.addToCart(product);
      window.alert('Your product has been added to the cart!');
    }
  ngOnInit(): void {
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
    this.product.view_count= this.product.view_count+1;
  }
 

}
