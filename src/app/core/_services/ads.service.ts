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
import {AdvertisementDto} from "../models/advertisment";

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
export class AdsService {
  constructor(private http: HttpClient) {}

  login(user_Login_Request:User_Login_Request): Observable<string> {
    return this.http.post<User_Login_Response>(environment.BASE_URL + '/auth/login', user_Login_Request, httpOptions).pipe(map(response=>response.token));
  }

  register(user_Register_Request:User_Register_Request): Observable<string> {
    return this.http.post<User_Register_Response>(environment.BASE_URL + '/auth/register', user_Register_Request).pipe(map(response=>response.token));
  }

  checkAuth(): Observable<boolean> {
    return this.http.get<boolean>(environment.BASE_URL + '/auth/check-auth', Authorization_Bearer);
  }

  getTop10ByCreationDate(accountId:string): Observable<[AdvertisementDto]> {
    return this.http.get<[AdvertisementDto]>(environment.BASE_URL1 + 'api/advertisement/all/top/10/'+accountId, Authorization_Bearer );
  }
}
