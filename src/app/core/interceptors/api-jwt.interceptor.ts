import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

// import * as moment from 'moment';
import { AppStorageService } from '../services/common/app-storage.service';

/**
 * Add JWT auth token header to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiJWTInterceptor implements HttpInterceptor {
  constructor(private appStorage: AppStorageService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    var authToken = this.appStorage.getUserToken();

    if (authToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `bearer ${authToken}`,
          'Access-Control-Allow-Origin': '*',
          // 'UTC-Offset': `${moment().utcOffset() / 60}`,
        },
      });
    }

    return next.handle(request);
  }
}
