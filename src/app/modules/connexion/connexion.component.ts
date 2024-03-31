import { Component } from '@angular/core';
import {
  RecivedDiscountRequestComponent
} from "../espace-compte/mes-offre-de-reductions/recived-discount-request/recived-discount-request.component";
import {
  SendedDiscountRequestComponent
} from "../espace-compte/mes-offre-de-reductions/sended-discount-request/sended-discount-request.component";
import {NgClass} from "@angular/common";
import {SeConnecterComponent} from "./se-connecter/se-connecter.component";
import {InscriptionComponent} from "./inscription/inscription.component";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    RecivedDiscountRequestComponent,
    SendedDiscountRequestComponent,
    NgClass,
    SeConnecterComponent,
    InscriptionComponent
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
}
