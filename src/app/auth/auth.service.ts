import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userIsAuthenticated = false;
  private username = '';

  get userIsAuthenticated() {
    return this._userIsAuthenticated;
  }

  constructor() {}

  getUserName() {
    return this.username;
  }

  setUserName(username: string) {
    this.username = username;
  }

  login() {
    this._userIsAuthenticated = true;
  }

  logout() {
    this._userIsAuthenticated = false;
  }
}
