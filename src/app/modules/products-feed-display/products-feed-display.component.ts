import { Component } from '@angular/core';
import {UpperSectionComponent} from "./upper-section/upper-section.component";
import {FilterSectionComponent} from "./filter-section/filter-section.component";
import {DisplaySectionComponent} from "./display-section/display-section.component";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-products-feed-display',
  standalone: true,
  imports: [
    UpperSectionComponent,
    FilterSectionComponent,
    DisplaySectionComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './products-feed-display.component.html',
  styleUrl: './products-feed-display.component.css'
})
export class ProductsFeedDisplayComponent {
  drawerOpen = true;

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
  }
}
