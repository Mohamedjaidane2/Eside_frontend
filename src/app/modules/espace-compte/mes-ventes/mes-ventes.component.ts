import { Component } from '@angular/core';
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
export class MesVentesComponent {

}
