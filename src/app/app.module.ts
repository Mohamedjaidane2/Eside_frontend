import {isDevMode, NgModule} from '@angular/core';
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
import {httpInterceptorProviders} from "./core/_helper/http.interceptor";
import {HttpClientModule} from "@angular/common/http";
import {provideState, provideStore, StoreModule} from "@ngrx/store";
import {provideStoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import {authFeatureKey, authReducer} from "./core/store/reducers/Auth/auth.reducer";
import {adsFeatureKey, adsReducer} from "./core/store/reducers/Advertisment/ads.reducer";
import {EffectsModule, provideEffects} from "@ngrx/effects";
import * as  authEffects from "./core/store/effects/Auth/auth.effects";
import * as  adsEffects from "./core/store/effects/Advertisment/ads.effects";
import { BackendErrorsMessagesComponent } from './shared/backend-errors-messages/backend-errors-messages.component';
import {InscriptionComponent} from "./modules/connexion/inscription/inscription.component";
import {FormsModule} from "@angular/forms";
import {ConnexionComponent} from "./modules/connexion/connexion.component";
import {SeConnecterComponent} from "./modules/connexion/se-connecter/se-connecter.component";
@NgModule({
  declarations: [
    AppComponent,
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
    BackendErrorsMessagesComponent,
    InscriptionComponent,
    EspaceCompteComponent,
    ConnexionComponent,
    SeConnecterComponent,
    RouterLink,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
  ],
  providers: [httpInterceptorProviders, provideStore(), provideStoreDevtools({
    maxAge: 25, // Retains last 25 states
    logOnly: !isDevMode(), // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    connectInZone: true // If set to true, the connection is established within the Angular zone
  }),
    provideState(authFeatureKey, authReducer),
    provideState(adsFeatureKey, adsReducer),
    provideEffects(authEffects,adsEffects)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
