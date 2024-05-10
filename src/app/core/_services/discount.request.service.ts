import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {OrderDto, OrderNewDto} from "../models/order";
import {
  DiscountRequestDto,
  DiscountRequestNewDto,
  DiscountRequestUpdateCounterDto,
  DiscountRequestUpdateDto
} from "../models/discountRequest";

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
  counterDiscountRequest(data : DiscountRequestUpdateCounterDto,discountId : number): Observable<any> {
    return this.http.put<any>(environment.BASE_URL1 + "api/discount-request/counter/"+discountId,data, httpOptions);
  }
  updateDiscountRequest(data : DiscountRequestUpdateDto,discountId : number): Observable<any> {
    return this.http.put<any>(environment.BASE_URL1 + "api/discount-request/update/"+discountId,data, httpOptions);
  }
  getDiscountRequestById(discountId : number): Observable<DiscountRequestDto> {
    return this.http.post<DiscountRequestDto>(environment.BASE_URL1 + "api/discount-request/"+discountId , httpOptions);
  }
  getAllDiscountRequests(data : DiscountRequestNewDto): Observable<DiscountRequestDto[]> {
    return this.http.get<DiscountRequestDto[]>(environment.BASE_URL1 + "api/discount-request/all" ,httpOptions);
  }
  deleteDiscountRequestById(discountId : number): Observable<DiscountRequestDto> {
    return this.http.delete<DiscountRequestDto>(environment.BASE_URL1 + "api/discount-request/delete/"+discountId, httpOptions);
  }
  getByReciver(reciverId : number): Observable<DiscountRequestDto[]> {
    return this.http.get<DiscountRequestDto[]>(environment.BASE_URL1 + "api/discount-request/get/reciver/"+reciverId, httpOptions);
  }
  getBySender(senderId : number): Observable<DiscountRequestDto[]> {
    return this.http.get<DiscountRequestDto[]>(environment.BASE_URL1 + "api/discount-request/get/sender/"+senderId, httpOptions);
  }
  acceptDiscount(discountId : number): Observable<any> {
    return this.http.put<any>(environment.BASE_URL1 + "api/discount-request/accept/"+discountId, httpOptions);
  }
  declineDiscount(discountId : number): Observable<any> {
    return this.http.put<any>(environment.BASE_URL1 + "api/discount-request/decline/"+discountId, httpOptions);
  }
}
