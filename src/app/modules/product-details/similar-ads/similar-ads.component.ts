import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-similar-ads',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './similar-ads.component.html',
  styleUrl: './similar-ads.component.css'
})
export class SimilarAdsComponent {

}
