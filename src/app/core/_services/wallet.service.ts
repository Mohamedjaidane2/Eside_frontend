import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {ProductDto, ProductNewDto} from "../models/product";
import {ResponsePayment, WalletActionDto, WalletDto} from "../models/wallet";

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
export class WalletService {
  constructor(private http: HttpClient) {}

  verifyPayment(paymentId: string): Observable<any> {
    return this.http.get<any>(
      `${environment.BASE_URL1}api/payment/payment/success/${paymentId}`
    );
  }
  createPayment(amount: number): Observable<ResponsePayment> {
    return this.http.post<ResponsePayment>(
      `${environment.BASE_URL1}api/payment/payment/create/${amount}`,
      {}
    );
  }

  getWalletByAccountId(accountId: string): Observable<WalletDto> {
    return this.http.get<WalletDto>(
      `${environment.BASE_URL1}api/wallet/getbyaccount/${accountId}`
    );
  }

  addFundsToWallet(walletActionDto: WalletActionDto): Observable<any> {
    return this.http.post<any>(
      `${environment.BASE_URL1}api/walletwallet/add-funds`,
      walletActionDto
    );
  }
  withdrawFunds(walletActionDto: WalletActionDto): Observable<any> {
    return this.http.post<any>(
      `${environment.BASE_URL1}api/wallet/withdraw-funds`,
      walletActionDto
    );
  }

}
