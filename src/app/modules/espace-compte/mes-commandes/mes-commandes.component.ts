import { Component } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {MyOrdersComponent} from "./my-orders/my-orders.component";

@Component({
  selector: 'app-mes-commandes',
  standalone: true,
  imports: [
    MyOrdersComponent,
    NgClass,
    NgIf
  ],
  templateUrl: './mes-commandes.component.html',
  styleUrl: './mes-commandes.component.css'
})
export class MesCommandesComponent {
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
