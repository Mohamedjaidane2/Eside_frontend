import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-nouveautes',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './nouveautes.component.html',
  styleUrl: './nouveautes.component.css'
})
export class NouveautesComponent {

}
