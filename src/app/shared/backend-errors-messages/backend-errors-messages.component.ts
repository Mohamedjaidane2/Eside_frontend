import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorInterface} from "../types/backendError.interface";

@Component({
  selector: 'mc-backend-errors-messages',
  standalone:true,
  templateUrl: './backend-errors-messages.component.html',
  styleUrl: './backend-errors-messages.component.css'
})
export class BackendErrorsMessagesComponent implements OnInit{
@Input() backendErrors : BackendErrorInterface ={httpCode:200,message:""};
errorMessages :string ="";
  ngOnInit(): void {
    this.errorMessages = this.backendErrors.message;
  }
}
