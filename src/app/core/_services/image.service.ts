import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {ImageResponseDto} from "../models/image";

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
export class ImageService {
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<ImageResponseDto> {
    const formData: FormData = new FormData();

    formData.append('file', file);
    return this.http.post<ImageResponseDto>(environment.BASE_URL1 + 'api/image/upload/firebase/',formData)
  }

  create(categoryNewDto:CategoryNewDto): Observable<any> {
    return this.http.post<CategoryNewDto>(environment.BASE_URL1 + 'api/categories/create', categoryNewDto, httpOptions).pipe(map(response=>response.name));
  }
  getall(): Observable<[CategoryDto]> {
    return this.http.get<[CategoryDto]>(environment.BASE_URL1 + 'api/categories/all', Authorization_Bearer );
  }
}
