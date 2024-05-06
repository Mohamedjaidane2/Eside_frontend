import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {OrderDto, OrderNewDto} from "../models/order";
import {DiscountRequestNewDto} from "../models/discountRequest";

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
export class DiscountRequestService {
  constructor(private http: HttpClient) {}

  create(data : DiscountRequestNewDto): Observable<any> {
    return this.http.post<any>(environment.BASE_URL1 + "api/discount-request/send",data, httpOptions);
  }
}
