import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8222/api/v1/auth/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  Authorization_Bearer = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }


  getInfo(token:string): Observable<any> {
    return this.http.get(API_URL + 'get/info',this.Authorization_Bearer);
  }

}
