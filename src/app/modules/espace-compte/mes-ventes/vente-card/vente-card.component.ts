import {Component, Input, OnInit} from '@angular/core';
import {NgIf} from "@angular/common";
import {OrderDto} from "../../../../core/models/order";
import {AdvertisementDto} from "../../../../core/models/advertisment";
import {AccountDto} from "../../../../core/models/account";
import {InformationDto} from "../../../../core/models/information";
import {Router, RouterLink} from "@angular/router";
import {AdsService} from "../../../../core/_services/ads.service";
import {AccountService} from "../../../../core/_services/account.service";
import {InformationService} from "../../../../core/_services/information.service";
import {OrderService} from "../../../../core/_services/order.service";
import {StorageService} from "../../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {switchMap} from "rxjs";
import {OrderStatusEnum} from "../../../../core/models/GlobalEnums";

@Component({
  selector: 'app-vente-card',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './vente-card.component.html',
  styleUrl: './vente-card.component.css'
})
export class VenteCardComponent  implements OnInit{
  @Input() order!:OrderDto
  advertisement !: AdvertisementDto;
  owner!:AccountDto;
  info!:InformationDto
  SuccsessMessage=""
  message=""
  acceptConfirmationDialogue = false
  refuseConfirmationDialogue = false
  constructor(
    private router: Router,
    private adsService: AdsService,
    private account: AdsService,
    private accountService: AccountService,
    private infoService: InformationService,
    private orderService: OrderService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  ngOnInit(): void {
    this.loadfRecivedOrders()
  }


  loadfRecivedOrders(): void {
    if (!this.order?.advertisementId!) return;
    this.adsService.getById(this.order?.advertisementId!.toString()).pipe(
      switchMap(advertisment => {
        this.advertisement = advertisment;
        return this.accountService.getAccountId(parseInt(this.order?.senderId!));
      })
    ).subscribe(owner => {
      this.owner = owner;
      this.infoService.getById(owner.id.toString()).subscribe(value => {
        this.info = value
      })
    });
  }
//------------------------------------   Accept  ---------------------------------------------------------
  showAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=true
    this.refuseConfirmationDialogue=false;
  }
  closeAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false;
    this.refuseConfirmationDialogue=false;
  }

  Accept(){
    this.orderService.confirmOrder(this.order?.orderId.toString()).subscribe({
      next: (value: any) => {
        this.SuccsessMessage = "Opération réussie !";
        //console.log(`response`, value);

      },error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }

  //------------------------------------   Refuse  ---------------------------------------------------------
  showRefuseConfirmation() {

    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=true;
  }
  closeRefuseConfirmation() {

    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=false;
  }

  Refuse(){
    this.orderService.declineOrder(this.order?.orderId.toString()).subscribe({
      next: (value: any) => {
        this.SuccsessMessage = "Opération réussie !";
        //console.log(`response`, value);

      },error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }


  isWaitingStatus() {
    return this.order?.orderStatus === 'AWAITING_CONFIRMATION';
  }
}
