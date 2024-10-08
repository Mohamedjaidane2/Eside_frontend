import {Component, Input, OnInit} from '@angular/core';
import {DiscountRequestDto, DiscountRequestUpdateCounterDto} from "../../../../core/models/discountRequest";
import {AdvertisementDto} from "../../../../core/models/advertisment";
import {AccountDto} from "../../../../core/models/account";
import {InformationDto} from "../../../../core/models/information";
import {Router} from "@angular/router";
import {FavoritesService} from "../../../../core/_services/favorites.service";
import {AdsService} from "../../../../core/_services/ads.service";
import {AccountService} from "../../../../core/_services/account.service";
import {InformationService} from "../../../../core/_services/information.service";
import {OrderService} from "../../../../core/_services/order.service";
import {StorageService} from "../../../../core/_services/storage.service";
import {Store} from "@ngrx/store";
import {CategoryStateInterface} from "../../../../core/store/statesInterfaces/Advertisment/categoryState.interface";
import {switchMap} from "rxjs";
import {NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DiscountRequestService} from "../../../../core/_services/discount.request.service";

@Component({
  selector: 'app-sended-discount-request',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './sended-discount-request.component.html',
  styleUrl: './sended-discount-request.component.css'
})
export class SendedDiscountRequestComponent implements OnInit{
  @Input() discountRequest!: DiscountRequestDto
  advertisement !: AdvertisementDto;
  owner!:AccountDto;
  info!:InformationDto
  SuccsessMessage=""
  message=""
  acceptConfirmationDialogue = false
  refuseConfirmationDialogue = false
  conterConfirmationDialogue = false
  countredFromData = new DiscountRequestUpdateCounterDto();
  constructor(
    private router: Router,
    private favoritesService: FavoritesService,
    private adsService: AdsService,
    private accountService: AccountService,
    private infoService: InformationService,
    private discountService: DiscountRequestService,
    private orderService: OrderService,
    private storageService:StorageService,
    private store: Store<{ store: CategoryStateInterface }>,
  ) {
  }
  ngOnInit(): void {
    //console.log("from recived"+this.discountRequest)
    this.loadDiscountRequest()
  }
  loadDiscountRequest(): void {
    if (!this.discountRequest?.advertismentId!) return;
    this.adsService.getById(this.discountRequest?.advertismentId!.toString()).pipe(
      switchMap(advertisment => {
        this.advertisement = advertisment;
        return this.accountService.getAccountId(this.discountRequest?.reciverId!);
      })
    ).subscribe(owner => {
      this.owner = owner;
      this.infoService.getById(owner.id.toString()).subscribe(value => {
        this.info = value
      })
    });
  }
//------------------------------------   Accept  ---------------------------------------------------------
  showAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=true
    this.refuseConfirmationDialogue=false;
    this.conterConfirmationDialogue=false;
  }
  closeAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false;
    this.refuseConfirmationDialogue=false;
    this.conterConfirmationDialogue=false;
  }

  Accept(){
    this.discountService.acceptDiscount(this.discountRequest.id).subscribe({
      next: (value: any) => {
        this.SuccsessMessage = "Opération réussie !";
        //console.log(`response`, value);

      },error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }

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

  Refuse(){
    this.discountService.declineDiscount(this.discountRequest.id).subscribe({
      next: (value: any) => {
        this.SuccsessMessage = "Opération réussie !";
        //console.log(`response`, value);

      },error: (err: any) => {
        console.log('eroor', err);
        this.message = err.error && err.error.message ? err.error.message : 'error!';
      }
    })
  }
  //------------------------------------   Counter  ---------------------------------------------------------
  showCounterConfirmation() {

    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=false;
    this.conterConfirmationDialogue=true;
  }
  closeCounterConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false
    this.refuseConfirmationDialogue=false;
    this.conterConfirmationDialogue=false;
  }

  isContred() {
    return this.discountRequest?.discountRequestStatus === 'COUNTERED';
  }
  isAccepted() {
    return this.discountRequest?.discountRequestStatus === 'ACCEPTED';
  }
}
