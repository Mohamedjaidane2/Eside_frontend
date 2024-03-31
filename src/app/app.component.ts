import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {CategoryBarComponent} from "./shared/category-bar/category-bar.component";
import {HomeComponent} from "./modules/home/home.component";
import {ProductsFeedDisplayComponent} from "./modules/products-feed-display/products-feed-display.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {ProductDetailsComponent} from "./modules/product-details/product-details.component";
import {UserGalleryComponent} from "./modules/user-gallery/user-gallery.component";
import {DiscountFormComponent} from "./modules/discount-form/discount-form.component";
import {PublierUneAnnonceComponent} from "./modules/publier-une-annonce/publier-une-annonce.component";
import {SuivreCommandeComponent} from "./modules/suivre-commande/suivre-commande.component";
import {EspaceCompteComponent} from "./modules/espace-compte/espace-compte.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,DiscountFormComponent, CategoryBarComponent, HomeComponent, ProductsFeedDisplayComponent, FooterComponent, ProductDetailsComponent, UserGalleryComponent,  DiscountFormComponent, PublierUneAnnonceComponent, SuivreCommandeComponent, EspaceCompteComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eside-frontend';
}
