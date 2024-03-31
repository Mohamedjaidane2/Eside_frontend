import { Routes } from '@angular/router';
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

export const routes: Routes = [
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
