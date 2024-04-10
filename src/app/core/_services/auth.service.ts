import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User_Login_Request, User_Register_Request, User_Response} from "../models/user";

const AUTH_API = 'http://localhost:8222/api/v1/auth/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user_Login_Request:User_Login_Request): Observable<any> {
    return this.http.post(AUTH_API + 'login', user_Login_Request, httpOptions);
  }

  register(user_Register_Request:User_Register_Request): Observable<any> {
    return this.http.post(AUTH_API + 'register', user_Register_Request);
  }

  checkAuth(token:string): Observable<any> {
    return this.http.get(AUTH_API + 'check-auth', httpOptions);
  }
  getInfo(token:string): Observable<any> {
    return this.http.get(AUTH_API + 'get/info', httpOptions,);
  }
}
