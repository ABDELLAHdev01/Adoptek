import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorgeService } from '../service/local-storge.service';

@Injectable()
export class JwthelperInterceptor implements HttpInterceptor {

  constructor(private tokenService : LocalStorgeService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = this.tokenService.getToken();
   

    // Check if authToken is available
    if (authToken) {
      
      // Clone the request to add the new header.
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${authToken}`)
      });

      // Send the newly created request
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
