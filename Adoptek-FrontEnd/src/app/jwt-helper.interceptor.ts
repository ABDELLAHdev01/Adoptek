import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorgeService } from './service/local-storge.service';

@Injectable()
export class JwtHelperInterceptor implements HttpInterceptor {

  constructor(private localService: LocalStorgeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localService.getToken();

    if(token){


      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });

      // Send the newly created request
      return next.handle(authReq);
    }	

    return next.handle(request);
  
  }
}
