import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {OrderDto, OrderNewDto} from "../models/order";

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
export class OrderService {
  constructor(private http: HttpClient) {}

  create(accountId : string , advertisementId:string): Observable<OrderDto> {
    return this.http.post<OrderDto>(environment.BASE_URL1 + "api/order/create/"+accountId+"/"+advertisementId, httpOptions);
  }
}
