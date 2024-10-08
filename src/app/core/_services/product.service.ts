import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
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
export class ProductService {
  constructor(private http: HttpClient) {}

  create(produitNewDto:ProductNewDto): Observable<number> {
    return this.http.post<ProductDto>(environment.BASE_URL1 + 'api/product/create', produitNewDto, httpOptions).pipe(map(response=>response.id));
  }
  getall(): Observable<[CategoryDto]> {
    return this.http.get<[CategoryDto]>(environment.BASE_URL1 + 'api/categories/all', Authorization_Bearer );
  }
}
