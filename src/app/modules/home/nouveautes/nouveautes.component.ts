import {Component, OnInit} from '@angular/core';
import {ProductCardComponent} from "../../../shared/product-card/product-card.component";
import {AuthService} from "../../../core/_services/auth.service";
import {Store} from "@ngrx/store";
import {AdsService} from "../../../core/_services/ads.service";
import {User_Login_Request} from "../../../core/models/user";
import {combineLatest} from "rxjs";
import {
  selectValidationErrors
} from "../../../core/store/reducers/Auth/auth.reducer";
import {selectRecentAds} from "../../../core/store/reducers/Advertisment/ads.reducer";
import {AuthActions} from "../../../core/store/actions/Auth/auth.actions";
import {AdsActions} from "../../../core/store/actions/Advertisment/ads.actions";
import {StorageService} from "../../../core/_services/storage.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {CategoryStateInterface} from "../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {AdsStateInterface} from "../../../core/store/statesInterfaces/Advertisment/adsState.interface";
import {selectListCategories} from "../../../core/store/reducers/Advertisment/category.reducer";
import {UserService} from "../../../core/_services/user.service";

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


  data$ = combineLatest({
    recentAds: this.store.select(selectRecentAds),

    backendErrors: this.store.select(selectValidationErrors),

  })

  constructor(
    private adsService: AdsService,
    private userService: UserService,
    private authService: AuthService,
    private storageService: StorageService,
    private store: Store<{ store: AdsStateInterface }>) {
    this.store.select(selectRecentAds).subscribe(List => this.recentads = List);
  }

  recentads!: AdvertisementDto[] | null
  token: string | null = localStorage.getItem("token");
  userAccountId: string = this.storageService.getUser().accountId;

  ngOnInit(): void {

    console.log("ngOnInit() called");
    if (this.token !== null) {
      console.log("Token is not null");
      this.authService.getInfo(this.token).subscribe(value => {
        console.log("Info fetched:", value);
        this.adsService.getTop10ByCreationDate(value.accountId).subscribe(List => {
          console.log("Top 10 ads fetched:", List);
          this.recentads = List;
        });
      });
    } else {
      console.log("Token is null");
      this.adsService.getTop10ByCreationDateNoAuth().subscribe(value => {
        console.log("All ads fetched:", value);
        this.recentads = value;
      });
    }
  }

}
