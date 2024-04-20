import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-discount-form',
  standalone: true,
    imports: [
    ],
  templateUrl: './discount-form.component.html',
  styleUrl: './discount-form.component.css'
})
export class DiscountFormComponent implements OnInit{
  title = 'Eside-frontend';
  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {
    //this.store.dispatch(AuthActions.checkAuth())
    //this.store.dispatch(AuthActions.getUserInfo())
  }
  value: number = 45.000;
  formattedValue(): string {
    return this.value.toFixed(3);
  }
}
