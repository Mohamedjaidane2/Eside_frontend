import { Component } from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-mes-annonces',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './mes-annonces.component.html',
  styleUrl: './mes-annonces.component.css'
})
export class MesAnnoncesComponent {

}
