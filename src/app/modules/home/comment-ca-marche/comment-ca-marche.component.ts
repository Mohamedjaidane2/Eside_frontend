import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-comment-ca-marche',
  standalone: true,
    imports: [
        ProductCardComponent
    ],
  templateUrl: './comment-ca-marche.component.html',
  styleUrl: './comment-ca-marche.component.css'
})
export class CommentCaMarcheComponent {

}
