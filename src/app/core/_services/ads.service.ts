import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {environment} from "../../../environments/environment.development";
import {AdvertisementDto, AdvertisementNewDto} from "../models/advertisment";
import {FilterInterface} from "../../shared/types/filter.interface";
import {ProductDto, ProductNewDto} from "../models/product";

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
  getTop10ByCreationDateNoAuth(): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/all/top/10/no-auth', Authorization_Bearer );
  }
  similar(accountId:string,categorieName:string): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/all/top/10/subcategory/'+accountId+"/"+categorieName, Authorization_Bearer );
  }
  similarNoAuth(categorieName:string): Observable<AdvertisementDto[]> {
    return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/all/top/10/subcategory/no-auth/'+categorieName, Authorization_Bearer );
  }

  getAllAdsByAccountId(accountId:string,params: any):Observable<any>{
    return this.http.get<any>(environment.BASE_URL1 + 'api/advertisement/all/recent/'+accountId,{ params } );
  }
  getAll():Observable<any>{
    return this.http.get<any>(environment.BASE_URL1 + 'api/advertisement/all');
  }

  getById(id:string):Observable<AdvertisementDto>{
    return this.http.get<AdvertisementDto>(environment.BASE_URL1+"api/advertisement/"+id,Authorization_Bearer)
  }

  search(filter:any[],params:any):Observable<any>{
    return this.http.post<any>(environment.BASE_URL1 + 'api/advertisement/all/byFilter',filter,{  params })
  }

  create(adsNewDto:AdvertisementNewDto): Observable<any> {
    return this.http.post<any>(environment.BASE_URL1 + 'api/advertisement/post', adsNewDto, httpOptions);
  }

  getGallery(id:string):Observable<AdvertisementDto[]> {
  return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/gellery/'+id, Authorization_Bearer );
}
getfavorites(id:string):Observable<AdvertisementDto[]> {
  return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/advertisement/favorites/'+id, Authorization_Bearer );
}
}
