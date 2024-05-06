import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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
export class MesCommandesComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Commandes");
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }

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
