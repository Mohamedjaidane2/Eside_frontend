import { Component } from '@angular/core';
import {UpperGallerySectionComponent} from "./upper-gallery-section/upper-gallery-section.component";
import {ProductCardComponent} from "../../shared/product-card/product-card.component";

@Component({
  selector: 'app-user-gallery',
  standalone: true,
  imports: [
    UpperGallerySectionComponent,
    ProductCardComponent
  ],
  templateUrl: './user-gallery.component.html',
  styleUrl: './user-gallery.component.css'
})
export class UserGalleryComponent {

}
