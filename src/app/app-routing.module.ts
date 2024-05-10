import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConnexionComponent} from "./modules/connexion/connexion.component";
import {EspaceCompteComponent} from "./modules/espace-compte/espace-compte.component";
import {MesInformationComponent} from "./modules/espace-compte/mes-information/mes-information.component";
import {MesFavorisComponent} from "./modules/espace-compte/mes-favoris/mes-favoris.component";
import {MesCommandesComponent} from "./modules/espace-compte/mes-commandes/mes-commandes.component";
import {MesAnnoncesComponent} from "./modules/espace-compte/mes-annonces/mes-annonces.component";
import {MesVentesComponent} from "./modules/espace-compte/mes-ventes/mes-ventes.component";
import {MonPortfeuilleComponent} from "./modules/espace-compte/mon-portfeuille/mon-portfeuille.component";
import {MesNotificationsComponent} from "./modules/espace-compte/mes-notifications/mes-notifications.component";
import {
  MesOffreDeReductionsComponent
} from "./modules/espace-compte/mes-offre-de-reductions/mes-offre-de-reductions.component";
import {HomeComponent} from "./modules/home/home.component";
import {ProductsFeedDisplayComponent} from "./modules/products-feed-display/products-feed-display.component";
import {PublierUneAnnonceComponent} from "./modules/publier-une-annonce/publier-une-annonce.component";
import {ProductDetailsComponent} from "./modules/product-details/product-details.component";
import {UserGalleryComponent} from "./modules/user-gallery/user-gallery.component";
import {DiscountFormComponent} from "./modules/discount-form/discount-form.component";
import {SuivreCommandeComponent} from "./modules/suivre-commande/suivre-commande.component";

const routes: Routes = [
  {
    path:"connexion",
    component:ConnexionComponent
  },
  {
   path:"",
    component:HomeComponent
  },
  {
   path:"liste-produit",
    component:ProductsFeedDisplayComponent
  },
  {
   path:"publier-annonce",
    component:PublierUneAnnonceComponent
  },
  {
    path:"details-produit/:id",
    component:ProductDetailsComponent
  },
  {
    path:"profile/:id",
    component:UserGalleryComponent
  },
  {
    path:"offre-reduction/:id",
    component:DiscountFormComponent
  },
  {
    path:"suivre-commande/:id",
    component:SuivreCommandeComponent
  },
  {
    path:"mon-compte",
    component:EspaceCompteComponent,
    children:[
      {
        path:"mes-infos",
        component:MesInformationComponent,
      },
      {
        path:"mes-favoris",
        component:MesFavorisComponent
      },
      {
        path:"mes-commandes",
        component:MesCommandesComponent
      },
      {
        path:"mes-annonces",
        component:MesAnnoncesComponent
      },
      {
        path:"mes-ventes",
        component:MesVentesComponent
      },
      {
        path:"mon-portfeuille",
        component:MonPortfeuilleComponent
      },
      {
        path:"mes-notification",
        component:MesNotificationsComponent
      },
      {
        path:"mes-offres",
        component:MesOffreDeReductionsComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
