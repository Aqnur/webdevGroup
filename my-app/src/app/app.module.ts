import { BrowserModule } from '@angular/platform-browser';
import {  ClassProvider,NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProviderService } from './shared/services/provider.service';
import { AuthInterceptor } from './AuthInterceptor';




import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { SlidesComponent } from './slides/slides.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CategoriesComponent,
    ProductsComponent,
    ProductdetailsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    SlidesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
