import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RequestTimerInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let start;
    if (req.url.includes('products')) {
      start = performance.now();
    }

    return next
      .handle(req).pipe(
        map(res => {
          if (start) {
            console.log('took ' + (performance.now() - start) + 'ms');
          }
          return res;
        }));
  }
}

