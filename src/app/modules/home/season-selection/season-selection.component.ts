import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-season-selection',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './season-selection.component.html',
  styleUrl: './season-selection.component.css'
})
export class SeasonSelectionComponent {

}
