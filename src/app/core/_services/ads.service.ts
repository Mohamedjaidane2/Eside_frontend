import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {environment} from "../../../environments/environment.development";
import {AdvertisementDto} from "../models/advertisment";
import {FilterInterface} from "../../shared/types/filter.interface";

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
  getTop10ByCreationDate(accountId:string): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/all/top/10/'+accountId, Authorization_Bearer );
  }
  //GET
  // /api/advertisement/all/recent/{accountId}
  getAllAdsByAccountId(accountId:string,params: any):Observable<any>{
    return this.http.get<any>(environment.BASE_URL1 + 'api/advertisement/all/recent/'+accountId,{ params } );
  }

  search(filter:any[],params:any):Observable<any>{
    return this.http.post<any>(environment.BASE_URL1 + 'api/advertisement/all/byFilter',filter,{  params })
  }

}
