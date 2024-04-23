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
export class InscriptionComponent {

   userRegisterData = new User_Register_Request()
  //isSuccessful = false;
  //isSignUpFailed = false;
  //errorMessage = '';
  //isLoading=false;
  data$ = combineLatest({
    backendErrors : this.store.select(selectValidationErrors),
    })

  constructor(
    private authService: AuthService,
    private store: Store ){
  }


  onSubmit(): void {
    //this.isLoading=true;
    //console.log(this.userRegisterData)
    this.store.dispatch(AuthActions.register(this.userRegisterData))
    //this.authService.register(this.userRegisterData).subscribe({
      //next: data => {
        //console.log("our data = "+data);
        //this.isSuccessful = true;
        //this.isSignUpFailed = false;
        //this.isLoading=false;
      //},
      //error: err => {
      //  this.errorMessage = err.error.message;
      //  this.isSignUpFailed = true;
      //  this.isLoading=false;
      //}
    //});
  }


}
