import {Component, OnInit} from '@angular/core';
import {AuthService} from "./core/_services/auth.service";
import {Store} from "@ngrx/store";

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
    window.scrollTo({ top: 0 });
   // this.store.dispatch(AuthActions.checkAuth())
  }

}
