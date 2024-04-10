import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8222/api/v1/auth/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}


  getInfo(token:string): Observable<any> {
    return this.http.get(API_URL + 'get/info',{ responseType: 'text' });
  }

}
