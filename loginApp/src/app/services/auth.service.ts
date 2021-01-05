import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private apiKey = 'AIzaSyBvauyy6nKphTA5CFaXxEWVfCVsSzySH38';

  userToken: string;

  //  Create new users
  // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  // Login
  // https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  constructor(private http: HttpClient) { 
    this.readToken();
  }

  register(user: UserModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.url}signUp?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);

        return resp;
      })
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
    ).pipe(
      map(resp => {
        this.saveToken(resp['idToken']);
        
        return resp;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expiredDate', today.getTime().toString());
  }

  private readToken() {
    if(localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  authenticated(): boolean {
    if(this.userToken.length < 2) {
      return false;
    } 
    
    const expired = Number(localStorage.getItem('expiredDate'));
    const expiredDate = new Date();
    expiredDate.setTime(expired);

    if(expiredDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }
}
