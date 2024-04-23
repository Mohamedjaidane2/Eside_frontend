import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {SubCategoryDto, SubCategoryNewDto} from "../models/subCategory";

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
export class SubCategoryService {
  constructor(private http: HttpClient) {}

  create(subcategoryNewDto:SubCategoryNewDto): Observable<any> {
    return this.http.post<SubCategoryNewDto>(environment.BASE_URL1 + 'api/subcategories/create', subcategoryNewDto, httpOptions).pipe(map(response=>response.name));
  }
  getall(): Observable<[SubCategoryDto]> {
    return this.http.get<[SubCategoryDto]>(environment.BASE_URL1 + 'api/subcategories/all', Authorization_Bearer );
  }
}
