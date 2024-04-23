import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-order-card-home',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './order-card-home.component.html',
  styleUrl: './order-card-home.component.css'
})
export class OrderCardHomeComponent {

}
