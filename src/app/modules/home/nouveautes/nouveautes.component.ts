import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {AuthService} from "../../../core/_services/auth.service";
import {Store} from "@ngrx/store";
import {AdsService} from "../../../core/_services/ads.service";
import {User_Login_Request} from "../../../core/models/user";
import {combineLatest} from "rxjs";
import {
  selectIsLoading,
  selectIsSubmitting,
  selectValidationErrors
} from "../../../core/store/reducers/Auth/auth.reducer";
import {selectRecentAds} from "../../../core/store/reducers/Advertisment/ads.reducer";
import {AuthActions} from "../../../core/store/actions/Auth/auth.actions";
import {AdsActions} from "../../../core/store/actions/Advertisment/ads.actions";
import {StorageService} from "../../../core/_services/storage.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nouveautes',
  standalone: true,
  imports: [
    ProductCardComponent,
    AsyncPipe,
    NgIf,
    NgForOf
  ],
  templateUrl: './nouveautes.component.html',
  styleUrl: './nouveautes.component.css'
})
export class NouveautesComponent implements OnInit {
  userLoginData = new User_Login_Request()
  data$ = combineLatest({
    isSubmitting : this.store.select(selectIsSubmitting),
    IsLoading: this.store.select(selectIsLoading),
    recentAds : this.store.select(selectRecentAds),
    backendErrors : this.store.select(selectValidationErrors),
  })

  constructor(
    private adsService: AdsService,
    private storageService:StorageService,
    private store: Store) {
  }

  userAccountId:string=this.storageService.getUser().accountId
  ngOnInit(): void {
    this.store.dispatch(AdsActions.recentAds({accountId:this.userAccountId}))
  }

}
