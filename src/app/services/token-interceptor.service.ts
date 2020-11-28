import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next: HttpHandler) {
    let cloned = req.clone({
      setHeaders: {
        Authorization : `Bearer ${localStorage.getItem('id_token')}`
      }
    });
    console.log(cloned);
    
    return next.handle(cloned);
  }
}
