import {AfterContentInit, Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {HeroComponent} from "./hero/hero.component";
import {NouveautesComponent} from "./nouveautes/nouveautes.component";
import {OrderCardHomeComponent} from "./order-card-home/order-card-home.component";
import {SellCardHomeComponent} from "./sell-card-home/sell-card-home.component";
import {CommentCaMarcheComponent} from "./comment-ca-marche/comment-ca-marche.component";
import {TrendyCategoryComponent} from "./trendy-category/trendy-category.component";
import {SeasonSelectionComponent} from "./season-selection/season-selection.component";
import {ClientsFeedbackComponent} from "./clients-feedback/clients-feedback.component";
import {FooterComponent} from "../../shared/footer/footer.component";
import {Router} from "@angular/router";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";
import {Store} from "@ngrx/store";
import {AdsActions} from "../../core/store/actions/Advertisment/ads.actions";
import {StorageService} from "../../core/_services/storage.service";
import {AdsService} from "../../core/_services/ads.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    NouveautesComponent,
    OrderCardHomeComponent,
    SellCardHomeComponent,
    CommentCaMarcheComponent,
    TrendyCategoryComponent,
    SeasonSelectionComponent,
    ClientsFeedbackComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterContentInit{
  token :string | null = localStorage.getItem("token");
  userAccountId:string=this.storageService.getUser().accountId;

  constructor(private router: Router,private store: Store,private adsService:AdsService,private storageService:StorageService) {
  }
  private pageReloaded = false;
  ngOnInit(): void {
    console.log("ng on init")
    window.scrollTo({ top: 0 });

    //this.store.dispatch(AuthActions.getUserInfo({token:this.token!}))
    this.store.dispatch(AuthActions.getUserInfo({token:this.token!}))
    //this.store.dispatch(AdsActions.recentAds({accountId:this.userAccountId}))

  }

  ngDoCheck():void{
    //console.log("ng do change")
     //


  }

  ngAfterContentInit() {
   // this.store.dispatch(AdsActions.recentAds({accountId:this.userAccountId}))

      //this.store.dispatch(AdsActions.recentAds({accountId:this.userAccountId}))
    //console.log("ngAfterContentInit");
    // if(!this.userAccountId){
    // }
  }

  reloadPage(): void {
    window.location.reload();
  }

}
