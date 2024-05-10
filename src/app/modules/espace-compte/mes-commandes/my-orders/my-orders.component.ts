import {Component, Input, OnInit} from '@angular/core';
import {OrderDto} from "../../../../core/models/order";
import {Router, RouterLink} from "@angular/router";
import {FavoritesService} from "../../../../core/_services/favorites.service";
import {OrderService} from "../../../../core/_services/order.service";
import {StorageService} from "../../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {AdsService} from "../../../../core/_services/ads.service";
import {switchMap} from "rxjs";
import {AdvertisementDto} from "../../../../core/models/advertisment";
import {AccountService} from "../../../../core/_services/account.service";
import {AccountDto} from "../../../../core/models/account";
import {InformationService} from "../../../../core/_services/information.service";
import {InformationDto} from "../../../../core/models/information";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-my-orders',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.css'
})
export class MyOrdersComponent implements OnInit{
  @Input() order!:OrderDto
  advertisement !: AdvertisementDto;
  owner!:AccountDto;
  info!:InformationDto
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
    this.loadAdById()
  }
  loadAdById(): void {
    if (!this.order?.advertisementId!) return;
    this.adsService.getById(this.order?.advertisementId!).pipe(
      switchMap(advertisment => {
        this.advertisement = advertisment;
        return this.accountService.getAccountId(advertisment.userAccountId!);
      })
    ).subscribe(owner => {
      this.owner = owner;
      this.infoService.getById(owner.id.toString()).subscribe(value => {
        this.info = value
      })
    });
  }

  isPaymentDone (){
    return this.order?.orderStatus === 'PAYMENT_RECEIVED';
  }
}

