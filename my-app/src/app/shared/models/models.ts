export interface IUser {
  id: number;
  username: string;
  password: string;
  first_name: string;
  email: string;
  is_admin: boolean;
}

export interface IAuthResponse {
  token: string;
  is_admin: boolean;
  name: string;
}

export interface IReview {
  id: number;
  text: string;
  user: IUser;
  product: IProduct;
}
export interface IProduct{
  id: number;
  categoryId:number;
  name: string;
  price: string;
  description: string;
  rating:any;
  originalLink:string;
  images:any;
  screen1:string;
  screen2:string;
  screen3:string;
  language: string;
  release: string;
  publisher: string;
  developer: string;
}