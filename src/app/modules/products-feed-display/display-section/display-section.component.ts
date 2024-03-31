import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-display-section',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './display-section.component.html',
  styleUrl: './display-section.component.css'
})
export class DisplaySectionComponent {

}
