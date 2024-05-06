import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyOrdersComponent} from "../mes-commandes/my-orders/my-orders.component";

@Component({
  selector: 'app-mes-ventes',
  standalone: true,
    imports: [
        MyOrdersComponent
    ],
  templateUrl: './mes-ventes.component.html',
  styleUrl: './mes-ventes.component.css'
})
export class MesVentesComponent implements OnInit {
  @Output() title = new EventEmitter<string>();

  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Ventes");
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }
}
