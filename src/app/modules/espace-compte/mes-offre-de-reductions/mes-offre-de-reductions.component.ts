import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {RecivedDiscountRequestComponent} from "./recived-discount-request/recived-discount-request.component";
import {SendedDiscountRequestComponent} from "./sended-discount-request/sended-discount-request.component";

@Component({
  selector: 'app-mes-offre-de-reductions',
  standalone: true,
  imports: [
    NgIf,
    RecivedDiscountRequestComponent,
    SendedDiscountRequestComponent,
    NgClass
  ],
  templateUrl: './mes-offre-de-reductions.component.html',
  styleUrl: './mes-offre-de-reductions.component.css'
})
export class MesOffreDeReductionsComponent {
  en_cours =false
  termineé=false;
  changestateEnCours(){
    this.en_cours= true
    this.termineé=false;
  }
  changestateTerminéé(){
    this.termineé=true
    this.en_cours=false
  }

  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }
}
