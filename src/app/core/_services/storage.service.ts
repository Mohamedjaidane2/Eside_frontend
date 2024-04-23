import { Injectable } from '@angular/core';
import {User_Response} from "../models/user";
import {AuthService} from "./auth.service";

const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private authService :AuthService) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: User_Response): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public delete_user_token(): void {
    window.localStorage.removeItem(USER_KEY);
    localStorage.removeItem("token")
  }

  public getUser(): User_Response {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return new User_Response();
  }



  public saveToken(token:string){
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem("token");

    if (token && this.authService.checkAuth()) {
      return true;
    }

    return false;
  }
}
