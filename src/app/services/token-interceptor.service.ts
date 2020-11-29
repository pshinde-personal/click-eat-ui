import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if(req.headers.get('Skip')){
      return next.handle(req);
    }
    let cloned = req.clone({
      setHeaders: {
        'Content-Type': `application/json`, 
        'Authorization': `Bearer ${localStorage.getItem('id_token')}`
      }
    });
    return next.handle(cloned);
  }
}
