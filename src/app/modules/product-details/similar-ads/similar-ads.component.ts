import {Component, Input, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {AdsService} from "../../../core/_services/ads.service";
import {UserService} from "../../../core/_services/user.service";
import {AuthService} from "../../../core/_services/auth.service";
import {StorageService} from "../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {AdsStateInterface} from "../../../core/store/statesInterfaces/Advertisment/adsState.interface";
import {selectRecentAds} from "../../../core/store/reducers/Advertisment/ads.reducer";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-similar-ads',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './similar-ads.component.html',
  styleUrl: './similar-ads.component.css'
})
export class SimilarAdsComponent implements OnInit{
  @Input() advertisment!: AdvertisementDto;

  similair: AdvertisementDto[] | null = null;
  token: string | null = localStorage.getItem('token');
  userAccountId: string = this.storageService.getUser().accountId;

  constructor(
    private adsService: AdsService,
    private userService: UserService,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit() called');
    console.log('advertisment:', this.advertisment);

    if (this.token !== null) {
      console.log('Token is not null');
      console.log('subcategoryname =' + this.advertisment?.product.subcategoryName);
      this.authService.getInfo(this.token).subscribe(value => {
        console.log('Info fetched:', value);
        this.adsService.similar(value.accountId, this.advertisment?.product.subcategoryName).subscribe(list => {
          console.log('Top 10 ads fetched:', list);
          this.similair = list;
        });
      });
    } else {
      console.log('Token is null');
      console.log('subcategoryname =' + this.advertisment?.product.subcategoryName);
      this.adsService.similarNoAuth(this.advertisment?.product.subcategoryName).subscribe(value => {
        console.log('All ads fetched:', value);
        this.similair = value;
      });
    }
  }

}
