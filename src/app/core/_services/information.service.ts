import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {CategoryDto, CategoryNewDto} from "../models/category";
import {InformationDto, InformationNewDto, InformationUpdateDto} from "../models/information";
import {AdvertisementDto} from "../models/advertisment";

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
export class InformationService {
  constructor(private http: HttpClient) {}

  create(informationNewDto:InformationNewDto): Observable<any> {
    return this.http.post<InformationDto>(environment.BASE_URL1 + 'api/information/create', informationNewDto, httpOptions);
  }

  getById(id:string):Observable<InformationDto>{
    return this.http.get<InformationDto>(environment.BASE_URL1+"api/information/get/accountid/"+id,Authorization_Bearer)
  }

  update(id:string,informationUpdateDto  : InformationUpdateDto):Observable<any>{
    return this.http.put<any>(environment.BASE_URL1+"api/information/update/"+id,informationUpdateDto,Authorization_Bearer)
  }


}
