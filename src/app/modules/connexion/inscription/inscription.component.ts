import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/_services/auth.service";
import {User_Register_Request} from "../../../core/models/user";
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    NgIf
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent implements OnInit {
  userRegisterData = new User_Register_Request()
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoading=false;

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isLoading=true;
    //console.log(this.userRegisterData)
    this.authService.register(this.userRegisterData).subscribe({
      next: data => {
        console.log("our data = "+data.token);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.isLoading=false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.isLoading=false;
      }
    });
  }
}
