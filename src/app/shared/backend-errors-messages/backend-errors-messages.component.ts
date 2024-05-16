import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorInterface} from "../types/backendError.interface";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'mc-backend-errors-messages',
  standalone: true,
  templateUrl: './backend-errors-messages.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './backend-errors-messages.component.css'
})
export class BackendErrorsMessagesComponent implements OnInit{
@Input() backendErrors !: BackendErrorInterface ;
errorMessages :string[] =[];
  ngOnInit(): void {
    if(this.backendErrors.error){
      this.errorMessages.push(this.backendErrors.error);
    }
    if (this.backendErrors.errors){
      this.backendErrors.errors.forEach((value, key) => {
        this.errorMessages.push(value+" : "+key)
      });
    }
    if(this.backendErrors.validationErrors){
      this.backendErrors.validationErrors.map(value => {
        this.errorMessages.push(value);
      })
    }
  }
}
