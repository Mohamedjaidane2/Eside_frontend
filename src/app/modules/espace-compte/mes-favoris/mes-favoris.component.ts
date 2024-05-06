import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FavorisCardComponent} from "../../../shared/favoris-card/favoris-card.component";

@Component({
  selector: 'app-mes-favoris',
  standalone: true,
    imports: [
        FavorisCardComponent
    ],
  templateUrl: './mes-favoris.component.html',
  styleUrl: './mes-favoris.component.css'
})
export class MesFavorisComponent implements OnInit {
  @Output() title = new EventEmitter<string>();

  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Favoris");
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }
}
