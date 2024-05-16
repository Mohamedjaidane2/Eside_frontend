import {Component, OnInit} from '@angular/core';
import {User_Login_Request, User_Register_Request, User_Response} from "../../../core/models/user";
import {AuthService} from "../../../core/_services/auth.service";
import {StorageService} from "../../../core/_services/storage.service";
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../../core/store/actions/Auth/auth.actions";
import {combineLatest} from "rxjs";
import {selectValidationErrors} from "../../../core/store/reducers/Auth/auth.reducer";
import {
  BackendErrorsMessagesComponent
} from "../../../shared/backend-errors-messages/backend-errors-messages.component";

@Component({
  selector: 'app-se-connecter',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgClass,
    AsyncPipe,
    BackendErrorsMessagesComponent
  ],
  templateUrl: './se-connecter.component.html',
  styleUrl: './se-connecter.component.css'
})
export class SeConnecterComponent implements OnInit {
  userLoginData = new User_Login_Request()
  data$ = combineLatest({
    backendErrors : this.store.select(selectValidationErrors),
  })
  constructor(
    private authService: AuthService,
    private store: Store) {
  }

  ngOnInit(): void {

  }

  async onSubmit() {
    console.log("clicked")
    await this.store.dispatch(AuthActions.login(this.userLoginData));
  }
}
