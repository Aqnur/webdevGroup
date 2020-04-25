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
