import { Component } from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-owner-details',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.css'
})
export class OwnerDetailsComponent {
  openTab = 4;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
}
