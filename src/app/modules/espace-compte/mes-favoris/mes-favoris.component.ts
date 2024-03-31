import { Component } from '@angular/core';
import {FavorisCardComponent} from "../../../shared/favoris-card/favoris-card.component";

@Component({
  selector: 'app-mes-favoris',
  standalone: true,
    imports: [
        FavorisCardComponent
    ],
  templateUrl: './mes-favoris.component.html',
  styleUrl: './mes-favoris.component.css'
})
export class MesFavorisComponent {

}
