import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DeliverySectionComponent} from "../../shared/delivery-section/delivery-section.component";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";
import {ClientsFeedbackComponent} from "../home/clients-feedback/clients-feedback.component";
import {SimilarAdsComponent} from "./similar-ads/similar-ads.component";
import {SendFeedbackFieldComponent} from "../../shared/send-feedback-field/send-feedback-field.component";
import {AdsService} from "../../core/_services/ads.service";
import {StorageService} from "../../core/_services/storage.service";
import {ActivatedRoute, ParamMap, Router, RouterLink} from "@angular/router";
import {AdvertisementDto} from "../../core/models/advertisment";
import {DatePipe, NgIf} from "@angular/common";
import {AppModule} from "../../app.module";
import {BackendErrorsMessagesComponent} from "../../shared/backend-errors-messages/backend-errors-messages.component";
import {ImagesViewModalComponent} from "../../shared/images-view-modal/images-view-modal.component";
import {AccountService} from "../../core/_services/account.service";
import {AccountDto} from "../../core/models/account";
import {switchMap} from "rxjs";
import {FeedBackNewDto} from "../../core/models/feedback";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {AuthStateInterface} from "../../core/store/statesInterfaces/Auth/authState.interface";
import {OrderService} from "../../core/_services/order.service";
import {ImageResponseDto} from "../../core/models/image";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    DeliverySectionComponent,
    OwnerDetailsComponent,
    ClientsFeedbackComponent,
    SimilarAdsComponent,
    SendFeedbackFieldComponent,
    DatePipe,
    NgIf,
    BackendErrorsMessagesComponent,
    ImagesViewModalComponent,
    RouterLink
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  id: string | null = null;
  advertisment!: AdvertisementDto;
  previewImage = false;
  showMask = false;
  message:string=""
  SuccsessMessage = "";
  currentLightImage = '';
  currentIndex = 0;
  controls = true;
  showcount = false;
  totalImageCount = 0;
  owner!: AccountDto;
  orderConfirmationDialogue = false


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adsService: AdsService,
    private accountService: AccountService,
    private orderService: OrderService,
    private store: Store<{ store: AuthStateInterface }>,
    private storageService:StorageService,
  ) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.subscribeToRouteParams();
  }

  private subscribeToRouteParams(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.handleRouteParams(params);
    });
  }

  private handleRouteParams(params: ParamMap): void {
    if (params.has('id')) {
      this.id = params.get('id');
      this.loadAdsById();
      console.log('Received id:', this.id);
    } else {
      console.error("'id' parameter is not provided in the route.");
    }
  }

  loadAdsById(): void {
    if (!this.id) return;
    this.adsService.getById(this.id!).pipe(
      switchMap(advertisment => {
        this.advertisment = advertisment;
        return this.accountService.getAccountId(advertisment.userAccountId!);
      })
    ).subscribe(owner => {
      this.owner = owner;
      this.totalImageCount = this.advertisment?.product.imagePaths.length || 0;
      this.currentLightImage = this.totalImageCount > 0 ? this.advertisment?.product.imagePaths[0] : '';
    });
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.showcount = true;
    this.currentIndex = index;
    this.currentLightImage = this.advertisment?.product.imagePaths[index] || '';
  }

  onClosePreview(): void {
    this.showMask = false;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImageCount;
    this.currentLightImage = this.advertisment?.product.imagePaths[this.currentIndex] || '';
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalImageCount) % this.totalImageCount;
    this.currentLightImage = this.advertisment?.product.imagePaths[this.currentIndex] || '';
  }

  showOrderConfirmation() {
    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
      this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }
    this.message="";
    this.SuccsessMessage = "";

    this.orderConfirmationDialogue=true;
  }
  closeOrderConfirmation() {
    this.orderConfirmationDialogue=false;
  }

  toOrder(){
    this.orderService.create(this.storageService.getUser()?.accountId!.toString(), this.id!).subscribe({
      next: (value: any) => {
        console.log(`response`, value);
        this.SuccsessMessage = "votre demande a eteais envoyer avec succeé";
      },
      error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }

}

