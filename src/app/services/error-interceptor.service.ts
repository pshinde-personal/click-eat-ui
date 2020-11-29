import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable, throwError } from 'rxjs';
import { retry, catchError }  from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {

    //  logic
    return next.handle(req).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if(error.error instanceof ErrorEvent) {
          //  client side error
          errorMsg = `Error: ${error.error.message}`;
        }
        else {
          // server side
          errorMsg = error.error.error
        }
        return throwError(errorMsg);
      })
    )
  }
}
