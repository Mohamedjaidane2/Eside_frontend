import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";

@Component({
  selector: 'app-mes-annonces',
  standalone: true,
  imports: [
    ProductCardComponent
  ],
  templateUrl: './mes-annonces.component.html',
  styleUrl: './mes-annonces.component.css'
})
export class MesAnnoncesComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Annonces");
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }
  ngAfterViewInit(): void {
    setTimeout(() => {

    });
  }
}
