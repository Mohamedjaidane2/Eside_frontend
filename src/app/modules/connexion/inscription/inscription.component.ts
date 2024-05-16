import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {AppModule} from "../../../app.module";
import {User_Register_Request} from "../../../core/models/user";
import {combineLatest} from "rxjs";
import {selectValidationErrors} from "../../../core/store/reducers/Auth/auth.reducer";
import {AuthService} from "../../../core/_services/auth.service";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../../core/store/actions/Auth/auth.actions";
import {
  BackendErrorsMessagesComponent
} from "../../../shared/backend-errors-messages/backend-errors-messages.component";
import {Router} from "@angular/router";
import {BackendErrorInterface} from "../../../shared/types/backendError.interface";

@Component({
  selector: 'app-inscription',
  standalone:true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    FormsModule,
    BackendErrorsMessagesComponent,
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent{

   userRegisterData = new User_Register_Request()
  errorMsg!:BackendErrorInterface;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }


  async onSubmit() {
    await this.authService.register(this.userRegisterData)
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          this.errorMsg = err.error
        }
      });
  }

}
