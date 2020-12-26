import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBvauyy6nKphTA5CFaXxEWVfCVsSzySH38';

  //  Create new users
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { }

  register(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    );
  }

  login(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signInWithPassword?key=${this.apiKey}`,
      authData
    );
  }

  logout() {

  }
}
