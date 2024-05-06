import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../core/_services/auth.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AdvertisementDto} from "../../core/models/advertisment";
import {switchMap} from "rxjs";
import {AdsService} from "../../core/_services/ads.service";
import {AccountDto} from "../../core/models/account";
import {AccountService} from "../../core/_services/account.service";
import {NgClass, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {DiscountRequestNewDto} from "../../core/models/discountRequest";
import {OrderService} from "../../core/_services/order.service";
import {StorageService} from "../../core/_services/storage.service";
import {DiscountRequestService} from "../../core/_services/discount.request.service";
import {OrderDto} from "../../core/models/order";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

@Component({
  selector: 'app-discount-form',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    FormsModule
  ],
  templateUrl: './discount-form.component.html',
  styleUrl: './discount-form.component.css'
})
export class DiscountFormComponent implements OnInit{
  id: string | null = null;
  value: number = 45.000;
  owner!: AccountDto;
  confirmation=false;
  message:string="";
  SuccsessMessage = "";
  advertisment!: AdvertisementDto;
  discountRequest = new DiscountRequestNewDto();
  discountConfirmationDialogue=false;

  constructor(
    private accountService: AccountService,
    private discountService: DiscountRequestService,
    private orderService: OrderService,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private route: ActivatedRoute,
    private adsService: AdsService,
    private storageService:StorageService,
  ) {
  }

  ngOnInit(): void {
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
    });
  }

  confirm(){
    this.confirmation=!this.confirmation
  }
  showOrderConfirmation() {
    this.store.dispatch(AuthActions.checkAuth())
    let token = localStorage.getItem("token");
    if(token!==null){
      this.store.dispatch(AuthActions.getUserInfo({token:token}))
    }
    this.message="";
    this.SuccsessMessage = "";

    this.discountConfirmationDialogue=true;
  }
  closeOrderConfirmation() {
    this.discountConfirmationDialogue=false;
  }
  onSubmit(){
    console.log(this.discountRequest)
    this.toOrder();
  }
  toOrder(){
    this.orderService.create(this.storageService.getUser()?.id!.toString(), this.id!).subscribe({
      next: (value: OrderDto) => {
        console.log(`response`, value);
        this.discountRequest.orderId=value.orderId;
        this.discountService.create(this.discountRequest).subscribe({
          next: (response :any )=>{
            this.SuccsessMessage = "votre demande a eteais envoyer avec succeé";
          }
        });
      },
      error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }
  formattedValue(): string {
    return this.value.toFixed(3);
  }
}
