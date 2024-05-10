import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {OrderService} from "../../../core/_services/order.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {AdsService} from "../../../core/_services/ads.service";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {NgForOf} from "@angular/common";
import {OrderDto} from "../../../core/models/order";
import {AdvertisementSoldStatusEnum, AdvertisementStatusEnum, OrderStatusEnum} from "../../../core/models/GlobalEnums";

@Component({
  selector: 'app-mes-annonces',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './mes-annonces.component.html',
  styleUrl: './mes-annonces.component.css'
})
export class MesAnnoncesComponent implements OnInit{
  @Output() title = new EventEmitter<string>();
  mesAnnonces !: AdvertisementDto[];
  id:string=this.storageService.getUser().accountId;
  filtredAds !:AdvertisementDto[];
  constructor(
    private router: Router,
    private adsService: AdsService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  ngOnInit(): void {
    this.title.emit("Mes Annonces");
    this.adsService.getAdsByAccountId(this.id).subscribe(value => {
      this.mesAnnonces=value
      this.filtredAds=value
    })
  }
  ngAfterViewInit(): void {
    setTimeout(() => {

    });
  }

  changeState(event: any) {
    const selectedStatus = event.target.value as AdvertisementSoldStatusEnum | AdvertisementStatusEnum ;
    console.log(`Selected status: ${selectedStatus}`);

    // Filter orderList based on selected status
    if (selectedStatus === AdvertisementSoldStatusEnum.SOLD) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementSoldStatusEnum === AdvertisementSoldStatusEnum.SOLD);
    } else if (selectedStatus === AdvertisementSoldStatusEnum.AVAILABLE) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementSoldStatusEnum === AdvertisementSoldStatusEnum.AVAILABLE);
    } else if (selectedStatus === AdvertisementSoldStatusEnum.IN_PROGRESS) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementSoldStatusEnum === AdvertisementSoldStatusEnum.IN_PROGRESS);
    } else if (selectedStatus === AdvertisementStatusEnum.ACCEPTED) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementStatusEnum === AdvertisementStatusEnum.ACCEPTED);
    } else if (selectedStatus === AdvertisementStatusEnum.REFUSED) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementStatusEnum === AdvertisementStatusEnum.REFUSED);
    } else if (selectedStatus === AdvertisementStatusEnum.NO_VALUE) {
      this.filtredAds = this.mesAnnonces.filter(annonce => annonce.advertisementStatusEnum === AdvertisementStatusEnum.NO_VALUE);
    }
    // Add conditions for other statuses if needed
  }

  resetFilter(): void {
    const radios = document.querySelectorAll('input[type="radio"][name="list-radio"]');
    radios.forEach(radio => {
      (radio as HTMLInputElement).checked = false;
    });
    this.filtredAds=this.mesAnnonces
  }
}
