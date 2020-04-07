import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import {CategoriesComponent} from './categories/categories.component'
import {CartComponent} from './cart/cart.component'
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  {path: 'categories', redirectTo: '/categories', pathMatch: 'full'},
  {path: 'categories', component:CategoriesComponent},
  {path: 'categories/:id', component: ProductsComponent },
  {path: 'products/:id', component: ProductdetailsComponent},
  {path: 'cart', component: CartComponent },
  { path: 'shipping', component: ShippingComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
