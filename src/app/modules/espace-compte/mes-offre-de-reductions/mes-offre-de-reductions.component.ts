import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RecivedDiscountRequestComponent} from "./recived-discount-request/recived-discount-request.component";
import {SendedDiscountRequestComponent} from "./sended-discount-request/sended-discount-request.component";
import {OrderDto} from "../../../core/models/order";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {DiscountRequestService} from "../../../core/_services/discount.request.service";
import {DiscountRequestDto} from "../../../core/models/discountRequest";
import {DiscountRequestStatus, OrderStatusEnum} from "../../../core/models/GlobalEnums";

@Component({
  selector: 'app-mes-offre-de-reductions',
  standalone: true,
  imports: [
    NgIf,
    RecivedDiscountRequestComponent,
    SendedDiscountRequestComponent,
    NgClass,
    NgForOf
  ],
  templateUrl: './mes-offre-de-reductions.component.html',
  styleUrl: './mes-offre-de-reductions.component.css'
})
export class MesOffreDeReductionsComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  id:string=this.storageService.getUser().accountId;
  recivedDiscountList!:DiscountRequestDto[];
  sendedDiscountList!:DiscountRequestDto[];
  filtredRecivedDiscountRequest !:DiscountRequestDto[];
  filtredSendedDiscountRequest !:DiscountRequestDto[];

  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private discountService: DiscountRequestService,
    private storageService:StorageService,
  ) {
  }

  ngOnInit(): void {
    this.title.emit("Mes Offres de réductions");
    this.discountService.getByReciver(parseInt(this.id)).subscribe(value => {
      this.recivedDiscountList=value
      this.filtredRecivedDiscountRequest=value

      //this.filtredOrders=value

    })
    this.discountService.getBySender(parseInt(this.id)).subscribe(value => {
      this.sendedDiscountList=value
      this.filtredSendedDiscountRequest=value
      //this.filtredOrders=value

    })
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
    this.resetFilter()
  }

  changeState(event: any) {
    const selectedStatus = event.target.value as DiscountRequestStatus;
    console.log(`Selected status: ${selectedStatus}`);

    // Filter orderList based on selected status
    if (selectedStatus === DiscountRequestStatus.WAITING) {
      this.filtredRecivedDiscountRequest = this.recivedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.WAITING);
      this.filtredSendedDiscountRequest = this.sendedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.WAITING);
    } else if (selectedStatus === DiscountRequestStatus.ACCEPTED) {
      this.filtredRecivedDiscountRequest = this.recivedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.ACCEPTED);
      this.filtredSendedDiscountRequest = this.sendedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.ACCEPTED);
    } else if (selectedStatus === DiscountRequestStatus.COUNTERED) {
      this.filtredRecivedDiscountRequest = this.recivedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.COUNTERED);
      this.filtredSendedDiscountRequest = this.sendedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.COUNTERED);
    } else if (selectedStatus === DiscountRequestStatus.DECLINED) {
      this.filtredRecivedDiscountRequest = this.recivedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.DECLINED);
      this.filtredSendedDiscountRequest = this.sendedDiscountList.filter(discount => discount.discountRequestStatus === DiscountRequestStatus.DECLINED);
    }
    // Add conditions for other statuses if needed
  }

  resetFilter(): void {
    const radios = document.querySelectorAll('input[type="radio"][name="list-radio"]');
    radios.forEach(radio => {
      (radio as HTMLInputElement).checked = false;
    });
    this.filtredRecivedDiscountRequest=this.recivedDiscountList
    this.filtredSendedDiscountRequest=this.sendedDiscountList
  }
}
