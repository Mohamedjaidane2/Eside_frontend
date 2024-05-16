import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {
  User_Login_Request,
  User_Login_Response,
  User_Register_Request,
  User_Register_Response,
  User_Response
} from "../models/user";
import {environment} from "../../../environments/environment.development";
import {JwtHelperService} from "@auth0/angular-jwt";

const AUTH_API = 'http://localhost:8222/api/v1';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    //'Authorization': `Bearer ${localStorage.getItem("token")}`
  })
}

const Authorization_Bearer = {
  headers: new HttpHeaders({
    'Authorization': `Bearer ${localStorage.getItem("token")}`
  })
}


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  login(user_Login_Request:User_Login_Request): Observable<string> {
    return this.http.post<User_Login_Response>(environment.BASE_URL + '/auth/login', user_Login_Request, httpOptions).pipe(map(response=>response.token));
  }

  register(user_Register_Request:User_Register_Request): Observable<void> {
    return this.http.post<void>(environment.BASE_URL + '/auth/register', user_Register_Request);
  }

  checkAuth(): Observable<boolean> {
    return this.http.get<boolean>(environment.BASE_URL + '/auth/check-auth', {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      })
    });
  }
  getInfo(token:string): Observable<User_Response> {
    return this.http.get<User_Response>(environment.BASE_URL + '/auth/get/info',
      {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    });
  }
  confirm(param: { token: string }): Observable<void> {
    return this.http.get<void>(`${environment.BASE_URL}/auth/activate-account`, { params: param });
  }

  isTokenNotValid() {
    return !this.isTokenValid();
  }

  private isTokenValid() {
    const token = localStorage.getItem("token")
    if(!token){
      return false
    }
    //decode the token
    const jwtHelper = new JwtHelperService();
    //check expiry date
    const isTokenExpired = jwtHelper.isTokenExpired(token)
    if(isTokenExpired){
      localStorage.clear();
      return false
    }
    return true;
  }
}
