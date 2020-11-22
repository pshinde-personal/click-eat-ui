import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authToken: any;
  user: any;

  backendUrl: string = 'https://thawing-caverns-75517.herokuapp.com/api/v1';

  constructor(private _http: HttpClient) { }
  
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.backendUrl}/auth/register`, user, {headers: headers});
  }

  loginUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.post(`${this.backendUrl}/auth/login`, user, {headers: headers});
  }

  authenticateUser() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${this.authToken}`);
    return this._http.get(`${this.backendUrl}/auth/getMe`, {headers: headers})
    .subscribe(
      data => {
        console.log(data);
    }, err => {
      console.log(err);
      
    })
  }

  saveToken(token: string) {
    this.authToken = token;
    localStorage.setItem('id_token', token);
    this.authenticateUser();
  }

  logOutUser() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
