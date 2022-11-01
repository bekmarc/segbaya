import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable()
export class ConfigInterceptor implements HttpInterceptor {
  loginUrl = `${"API_USERS_URL"}SECURITY-SERVICE/login`;

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url === this.loginUrl || request.url === this.loginUrl) {
      request = request.clone({
        headers: request.headers.set(
          "Content-Type",
          "application/x-www-form-urlencoded"
        ),
      });
      request = request.clone({
        headers: request.headers.set(
          "Accept",
          "application/x-www-form-urlencoded"
        ),
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // console.log("event ---->>", event);
        }
        return event;
      }),

      catchError((error: HttpErrorResponse) => {
        let data = {};

        data = {
          reason:
            (error && error.error ? error.error : "") +
            " - " +
            (error && error.message ? error.message : ""),
          status: error.status,
        };
        if (error.status == 500) {
          // this.sweetAlertService.showErrorAlert(
          //   "Warning !",
          //   "une erreur s'est produite , nous vous reviendrons plus tard "
          // );
        }

        // console.log("data: ", data);
        return throwError(() => error);
      })
    );
  }
}
