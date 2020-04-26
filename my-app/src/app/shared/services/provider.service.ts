import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient } from '@angular/common/http';
import { IAuthResponse, IProduct,IReview } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  auth(login: any, pass: any): Promise<IAuthResponse> {
    return this.post('http://127.0.0.1:8000/api/login/', {
      username: login,
      password: pass
    });
  }

  logout(): Promise<any> {
    return this.post('http://127.0.0.1:8000/api/logout/', {});
  }

  getReviews(productId: number): Promise<IReview[]> {
    return this.get(`http://127.0.0.1:8000/api/products/${productId}/reviews/`, {});
  }

  postReview(product: IProduct, nText: any): Promise<IReview> {
    return this.post(`http://127.0.0.1:8000/api/products/${product.id}/reviews/`,{
      text: nText
    });
  }





  register(login: any, pass: any, name: any, nEmail: any): Promise<IAuthResponse> {
    return this.post('http://127.0.0.1:8000/api/register/', {
      username: login,
      password: pass,
      first_name: name,
      email: nEmail
    });
  }
}
