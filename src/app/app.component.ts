import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "./core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private store: Store) {
  }
  ngOnInit(): void {
    this.store.dispatch(AuthActions.checkAuth())
    this.store.dispatch(AuthActions.getUserInfo())
  }

}
