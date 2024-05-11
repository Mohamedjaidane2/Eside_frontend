import {Component, OnInit} from '@angular/core';
import {OrderStatusTimeLineComponent} from "./order-status-time-line/order-status-time-line.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ClientsFeedbackComponent} from "../home/clients-feedback/clients-feedback.component";
import {DeliverySectionComponent} from "../../shared/delivery-section/delivery-section.component";
import {OwnerDetailsComponent} from "../product-details/owner-details/owner-details.component";
import {SendFeedbackFieldComponent} from "../../shared/send-feedback-field/send-feedback-field.component";
import {SimilarAdsComponent} from "../product-details/similar-ads/similar-ads.component";
import {AuthService} from "../../core/_services/auth.service";
import {ActivatedRoute, ParamMap, Route, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";
import {AdvertisementDto} from "../../core/models/advertisment";
import {AccountDto} from "../../core/models/account";
import {InformationDto} from "../../core/models/information";
import {AdsService} from "../../core/_services/ads.service";
import {AccountService} from "../../core/_services/account.service";
import {InformationService} from "../../core/_services/information.service";
import {OrderService} from "../../core/_services/order.service";
import {StorageService} from "../../core/_services/storage.service";
import {CategoryStateInterface} from "../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {switchMap} from "rxjs";
import {OrderDto} from "../../core/models/order";
import {DatePipe, NgIf} from "@angular/common";
import {OrderStatusEnum} from "../../core/models/GlobalEnums";

@Component({
  selector: 'app-suivre-commande',
  standalone: true,
  imports: [
    OrderStatusTimeLineComponent,
    ProductDetailsComponent,
    ClientsFeedbackComponent,
    DeliverySectionComponent,
    OwnerDetailsComponent,
    SendFeedbackFieldComponent,
    SimilarAdsComponent,
    DatePipe,
    NgIf
  ],
  templateUrl: './suivre-commande.component.html',
  styleUrl: './suivre-commande.component.css'
})
export class SuivreCommandeComponent implements OnInit {
  title = 'Eside-frontend';
  id: string | null = null;
  advertisement !: AdvertisementDto;
  order!:OrderDto;
  owner!:AccountDto;
  info!:InformationDto
  currentLightImage = '';
  currentIndex = 0;
  controls = true;
  showcount = false;
  totalImageCount = 0;
  previewImage = false;
  showMask = false;
  SuccsessMessage= ""
  message= ""
  acceptConfirmationDialogue = false
  refuseConfirmationDialogue = false
  conterConfirmationDialogue = false
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private adsService: AdsService,
    private account: AdsService,
    private accountService: AccountService,
    private infoService: InformationService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }

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
      if(this.id!=null){
        this.loadAdById(this.id);
      }
      console.log('Received id:', this.id);
    } else {
      console.error("'id' parameter is not provided in the route.");
    }
  }
  loadAdById(id:string): void {
    this.orderService.getOrderById(id).pipe(
      switchMap(order => {
        this.order = order;
        return this.adsService.getById(order.advertisementId);
      })
    ).subscribe(annonce => {
      this.advertisement = annonce;
      this.totalImageCount = annonce?.product.imagePaths.length || 0;
      this.currentLightImage = this.totalImageCount > 0 ? annonce?.product.imagePaths[0] : '';
      //this.infoService.getById(owner.id.toString()).subscribe(value => {
      //  this.info = value
      //})
    });
  }
  loadAdsById(): void {
    if (!this.id) return;
    this.adsService.getById(this.id!).pipe(
      switchMap(advertisment => {
        this.advertisement = advertisment;
        return this.accountService.getAccountId(advertisment.userAccountId!);
      })
    ).subscribe(owner => {
      this.owner = owner;
      this.totalImageCount = this.advertisement?.product.imagePaths.length || 0;
      this.currentLightImage = this.totalImageCount > 0 ? this.advertisement?.product.imagePaths[0] : '';
    });
  }
  onPreviewImage(index: number): void {
    this.showMask = true;
    this.previewImage = true;
    this.showcount = true;
    this.currentIndex = index;
    this.currentLightImage = this.advertisement?.product.imagePaths[index] || '';
  }

  onClosePreview(): void {
    this.showMask = false;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.totalImageCount;
    this.currentLightImage = this.advertisement?.product.imagePaths[this.currentIndex] || '';
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.totalImageCount) % this.totalImageCount;
    this.currentLightImage = this.advertisement?.product.imagePaths[this.currentIndex] || '';
  }
  Refuse(){
    this.orderService.declineOrder(this.order.orderId.toString()).subscribe({
      next: (value: any) => {
        this.SuccsessMessage = " Opération réussie !";
        //console.log(`response`, value);

      },error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }

  protected readonly OrderStatusEnum = OrderStatusEnum;
  //------------------------------------   Refuse  ---------------------------------------------------------
  showRefuseConfirmation() {

    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=true;
    this.conterConfirmationDialogue=false;
  }
  closeRefuseConfirmation() {

    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=false;
    this.conterConfirmationDialogue=false;
  }
}
