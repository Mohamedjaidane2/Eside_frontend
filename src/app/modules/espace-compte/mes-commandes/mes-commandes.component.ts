import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {MyOrdersComponent} from "./my-orders/my-orders.component";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {AdsService} from "../../../core/_services/ads.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {OrderService} from "../../../core/_services/order.service";
import {OrderDto} from "../../../core/models/order";
import {OrderStatusEnum} from "../../../core/models/GlobalEnums";

@Component({
  selector: 'app-mes-commandes',
  standalone: true,
  imports: [
    MyOrdersComponent,
    NgClass,
    NgIf,
    NgForOf
  ],
  templateUrl: './mes-commandes.component.html',
  styleUrl: './mes-commandes.component.css'
})
export class MesCommandesComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  id:string=this.storageService.getUser().accountId;
  orderList!:OrderDto[];
  filtredOrders !:OrderDto[];
  //@Output() title = new EventEmitter<(result: string) => void>();
  ngOnInit(): void {
    this.title.emit("Mes Commandes");
    this.orderService.getMyOrder(this.id.toString()).subscribe(value => {
      this.orderList=value
      this.filtredOrders=value
    })
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }
  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private orderService: OrderService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
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
    } else if (selectedStatus === OrderStatusEnum.DELIVERED || OrderStatusEnum.PAYMENT_RECEIVED) {
      this.filtredOrders = this.orderList.filter(order => order.orderStatus === OrderStatusEnum.DELIVERED || OrderStatusEnum.PAYMENT_RECEIVED);
    }
    // Add conditions for other statuses if needed
  }


  openTab = 1;
  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  resetFilter(): void {
    const radios = document.querySelectorAll('input[type="radio"][name="list-radio"]');
    radios.forEach(radio => {
      (radio as HTMLInputElement).checked = false;
    });
    this.filtredOrders=this.orderList
  }
}
