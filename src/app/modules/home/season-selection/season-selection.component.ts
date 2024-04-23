import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {NgForOf} from "@angular/common";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {combineLatest} from "rxjs";
import {selectFeedAds, selectRecentAds} from "../../../core/store/reducers/Advertisment/ads.reducer";
import {selectValidationErrors} from "../../../core/store/reducers/Auth/auth.reducer";
import {AdsService} from "../../../core/_services/ads.service";
import {Store} from "@ngrx/store";
import {AdsStateInterface} from "../../../core/store/statesInterfaces/Advertisment/adsState.interface";
import {Actions} from "@ngrx/effects";

@Component({
  selector: 'app-season-selection',
  standalone: true,
    imports: [
        ProductCardComponent,
        NgForOf
    ],
  templateUrl: './season-selection.component.html',
  styleUrl: './season-selection.component.css'
})
export class SeasonSelectionComponent implements OnInit{
  feedAds!:AdvertisementDto[]|null


  constructor(
    private adsService: AdsService,
    private store: Store<{store:AdsStateInterface}>) {
   // this.store.select(selectFeedAds).subscribe(List => this.feedAds = List);
  }

  ngOnInit(): void {
  }

}
