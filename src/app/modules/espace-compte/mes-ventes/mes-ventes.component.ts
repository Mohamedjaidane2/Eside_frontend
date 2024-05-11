import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MyOrdersComponent} from "../mes-commandes/my-orders/my-orders.component";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {OrderService} from "../../../core/_services/order.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {OrderDto} from "../../../core/models/order";
import {OrderStatusEnum} from "../../../core/models/GlobalEnums";
import {NgForOf} from "@angular/common";
import {VenteCardComponent} from "./vente-card/vente-card.component";

@Component({
  selector: 'app-mes-ventes',
  standalone: true,
  imports: [
    MyOrdersComponent,
    NgForOf,
    VenteCardComponent
  ],
  templateUrl: './mes-ventes.component.html',
  styleUrl: './mes-ventes.component.css'
})
export class MesVentesComponent implements OnInit {
  @Output() title = new EventEmitter<string>();
  id:string=this.storageService.getUser().accountId;
  orderList!:OrderDto[];
  filtredOrders !:OrderDto[];
  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private orderService: OrderService,
    private storageService:StorageService,
  ) {
  }

  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Ventes");
    this.orderService.getRecivedOrder(this.id.toString()).subscribe(value => {
      this.orderList=value
      this.filtredOrders=value
    })
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }

  changeState(event: any) {
    const selectedStatus = event.target.value as OrderStatusEnum;
    console.log(`Selected status: ${selectedStatus}`);

    // Filter orderList based on selected status
    if (selectedStatus === OrderStatusEnum.AWAITING_CONFIRMATION) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.AWAITING_CONFIRMATION);
    } else if (selectedStatus === OrderStatusEnum.AWAITING_PROCESSING) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.AWAITING_PROCESSING);
    } else if (selectedStatus === OrderStatusEnum.IN_TRANSIT) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.IN_TRANSIT);
    } else if (selectedStatus === OrderStatusEnum.DELIVERED) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.DELIVERED);
    } else if (selectedStatus === OrderStatusEnum.PAYMENT_RECEIVED) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.PAYMENT_RECEIVED);
    }else if (selectedStatus === OrderStatusEnum.CANCELLED) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.CANCELLED);
    }else if (selectedStatus === OrderStatusEnum.CONFIRMED) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.CONFIRMED);
    }else if (selectedStatus === OrderStatusEnum.LISTED_FOR_WAITING) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.LISTED_FOR_WAITING);
    }
    // Add conditions for other statuses if needed
  }


  resetFilter(): void {
    const radios = document.querySelectorAll('input[type="radio"][name="list-radio"]');
    radios.forEach(radio => {
      (radio as HTMLInputElement).checked = false;
    });
    this.filtredOrders=this.orderList
  }
}
