import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {environment} from "../../../environments/environment.development";
import {AdvertisementDto, AdvertisementNewDto} from "../models/advertisment";
import {FilterInterface} from "../../shared/types/filter.interface";
import {ProductDto, ProductNewDto} from "../models/product";
import {AccountDto} from "../models/account";

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
export class AccountService {
  constructor(private http: HttpClient) {}

  getAccountId(accountId:number):Observable<AccountDto>{
    return this.http.get<AccountDto>(environment.BASE_URL1 + 'api/account/get/'+accountId );
  }

}
