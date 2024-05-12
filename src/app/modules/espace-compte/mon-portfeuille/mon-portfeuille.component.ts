import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DecimalPipe, NgClass, NgIf} from "@angular/common";
import {Route, Router} from "@angular/router";
import {FavoritesService} from "../../../core/_services/favorites.service";
import {OrderService} from "../../../core/_services/order.service";
import {StorageService} from "../../../core/_services/storage.service";
import {WalletActionDto, WalletDto} from "../../../core/models/wallet";
import {WalletService} from "../../../core/_services/wallet.service";

@Component({
  selector: 'app-mon-portfeuille',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    DecimalPipe
  ],
  templateUrl: './mon-portfeuille.component.html',
  styleUrl: './mon-portfeuille.component.css'
})
export class MonPortfeuilleComponent implements OnInit {
  @Output() title = new EventEmitter<string>();
  id:string=this.storageService.getUser().accountId;
  wallet !: WalletDto
  SuccsessMessage=""
  message=""
  acceptConfirmationDialogue = false
  walletActionDto = new WalletActionDto
  checkPayment=false
  accepted=true
  paymentId= ""
  constructor(
    private router: Router,
    private walletService: WalletService,
    private storageService:StorageService,
  ) {
  }
  ngOnInit(): void {
    this.title.emit("Mon portefeuille");
    this.walletService.getWalletByAccountId(this.id).subscribe(value => this.wallet=value)
    //this.isChecked = Array(this.colorsData.length).fill(false);
  }

protected readonly open = open;
  toggle: number = 1;
  showAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=true
  }
  closeAcceptConfirmation() {
    this.message="";
    this.SuccsessMessage = "";
    this.acceptConfirmationDialogue=false;
  }

  Accept() {
    this.walletActionDto.walletId = this.wallet.id;
    this.walletActionDto.amount = this.wallet.balance;
    const balanceInteger = Math.floor(this.wallet.balance * 1000);

    this.walletService.createPayment(balanceInteger).subscribe(paymentResponse => {
      if (paymentResponse && paymentResponse.link) {
        // Open the payment URL in a new tab
        window.open(paymentResponse.link, '_blank');
        this.accepted=false
        this.checkPayment=true
        this.paymentId=paymentResponse.payment_id
      } else {
        console.error('Payment URL is empty:', paymentResponse);
      }
    }, (error) => {
      console.error('Failed to create payment:', error);

    });

  }
  checkpayment(){
    this.walletActionDto.walletId = this.wallet.id;
    this.walletActionDto.amount = this.wallet.balance;
    const balanceInteger = parseInt(this.wallet.balance.toString());

    this.walletService.verifyPayment(this.paymentId).subscribe(value => {
      if(value.message){
        this.SuccsessMessage ="Opération réussite!"
        this.walletService.withdrawFunds(this.walletActionDto).subscribe({
          next: (value: any) => {
            this.SuccsessMessage = "Opération réussie !";
            this.walletService.getWalletByAccountId(this.id).subscribe(value => this.wallet=value)
            //console.log(`response`, value);

          },error: (err: any) => {
            console.log('eroor', err);
            this.message = err.error && err.error.message ? err.error.message : 'error!';
          }
        })
      }else {
        this.message="un error se produit ! veuillez ressayer"
      }
    })
  }
  changetoggle(number : number){
    this.toggle=number;
  }
  isCollapsed1 = false
  isCollapsed2 = false
  isCollapsed3 = false


  toggleCollapse(num: number) {
    if(num==1){
      this.isCollapsed1=!this.isCollapsed1
      this.isCollapsed2=false
      this.isCollapsed3=false
    }else if(num==2){
      this.isCollapsed1=false
      this.isCollapsed2=!this.isCollapsed2
      this.isCollapsed3=false
    }else if(num==3){
      this.isCollapsed1=false
      this.isCollapsed2=false
      this.isCollapsed3=!this.isCollapsed3
    }
  }
}
