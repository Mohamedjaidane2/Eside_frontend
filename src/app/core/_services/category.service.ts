import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";

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
export class CategoryService {
  constructor(private http: HttpClient) {}

  create(categoryNewDto:CategoryNewDto): Observable<any> {
    return this.http.post<CategoryNewDto>(environment.BASE_URL1 + 'api/categories/create', categoryNewDto, httpOptions).pipe(map(response=>response.name));
  }
  getall(): Observable<[CategoryDto]> {
    return this.http.get<[CategoryDto]>(environment.BASE_URL1 + 'api/categories/all', Authorization_Bearer );
  }
}
