import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';

import {environment} from "../../../environments/environment.development";
import {AdvertisementDto, AdvertisementNewDto} from "../models/advertisment";
import {FilterInterface} from "../../shared/types/filter.interface";
import {ProductDto, ProductNewDto} from "../models/product";
import {AccountDto} from "../models/account";
import {FavortieDto, NewFavoriteDto} from "../models/favorites";

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
export class FavoritesService {
  constructor(private http: HttpClient) {}

  create(newFavoriteDto:NewFavoriteDto):Observable<any>{
    return this.http.post<any>(environment.BASE_URL1 + 'api/favorite/add',newFavoriteDto,httpOptions);
  }
  deleteFromFavorite(newFavoriteDto:NewFavoriteDto):Observable<any>{
    return this.http.post<any>(environment.BASE_URL1 + 'api/favorite/remove',newFavoriteDto );
  }
  isSelected(newFavoriteDto:NewFavoriteDto):Observable<boolean>{
    return this.http.post<boolean>(environment.BASE_URL1 + 'api/favorite/is-selected',newFavoriteDto );
  }
  getFavoriteById(id:number):Observable<FavortieDto>{
    return this.http.get<FavortieDto>(environment.BASE_URL1 + 'api/favorite/get/'+id );
  }
  getAllByAccountId(accountId:number):Observable<AdvertisementDto[]>{
    return this.http.get<AdvertisementDto[]>(environment.BASE_URL1 + 'api/favorite/get-all/by-account/'+accountId );
  }

}
