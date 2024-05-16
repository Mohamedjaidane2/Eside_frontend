import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {StorageService} from "../_services/storage.service";
import {Observable} from "rxjs";


// @Injectable()
// export class HttpTokenInterceptor implements HttpInterceptor {
//
//   constructor(
//   ) {}
//
//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     const token = localStorage.getItem('token')
//     if (token) {
//       const authReq = request.clone({
//         headers: new HttpHeaders({
//           Authorization: `Bearer ${token}`
//         })
//       });
//       return next.handle(authReq);
//     }
//     return next.handle(request);
//   }
// }
