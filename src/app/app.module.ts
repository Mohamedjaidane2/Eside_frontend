import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {NavbarComponent} from "./shared/navbar/navbar.component";
import {DiscountFormComponent} from "./modules/discount-form/discount-form.component";
import {CategoryBarComponent} from "./shared/category-bar/category-bar.component";
import {HomeComponent} from "./modules/home/home.component";
import {ProductsFeedDisplayComponent} from "./modules/products-feed-display/products-feed-display.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {ProductDetailsComponent} from "./modules/product-details/product-details.component";
import {UserGalleryComponent} from "./modules/user-gallery/user-gallery.component";
import {PublierUneAnnonceComponent} from "./modules/publier-une-annonce/publier-une-annonce.component";
import {SuivreCommandeComponent} from "./modules/suivre-commande/suivre-commande.component";
import {EspaceCompteComponent} from "./modules/espace-compte/espace-compte.component";
import { EspaceAdminComponent } from './modules/espace-admin/espace-admin.component';
import {httpInterceptorProviders} from "./core/_helper/http.interceptor";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    EspaceAdminComponent,
  ],
  imports: [
    RouterOutlet,
    NavbarComponent,
    DiscountFormComponent,
    CategoryBarComponent,
    HomeComponent,
    ProductsFeedDisplayComponent,
    FooterComponent,
    ProductDetailsComponent,
    UserGalleryComponent,
    DiscountFormComponent,
    PublierUneAnnonceComponent,
    SuivreCommandeComponent,
    EspaceCompteComponent,
    RouterLink,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
