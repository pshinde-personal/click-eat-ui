import { JwtHelperService} from '@auth0/angular-jwt'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  backendUrl: string = 'https://thawing-caverns-75517.herokuapp.com/api/v1';

  constructor(private _http: HttpClient,
    private jwtHelper: JwtHelperService) { }
  
  registerUser(user) {
    return this._http.post(`${this.backendUrl}/auth/register`, user);
  }

  loginUser(user) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Skip', 'true');
    return this._http.post(`${this.backendUrl}/auth/login`, user, {headers: headers});
  }

  authenticateUser() {
    return this._http.get(`${this.backendUrl}/auth/getMe`)
  }

  isLoggedIn() {
    this.loadToken();
    this.loadUser();
    return !this.jwtHelper.isTokenExpired(this.authToken);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loadUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user = user;
  }

  saveToken(token: string) {
    this.authToken = token;
    localStorage.setItem('id_token', token);
  }

  saveUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logOutUser() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
