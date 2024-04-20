import {Component, OnInit} from '@angular/core';
import {OrderStatusTimeLineComponent} from "./order-status-time-line/order-status-time-line.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ClientsFeedbackComponent} from "../home/clients-feedback/clients-feedback.component";
import {DeliverySectionComponent} from "../../shared/delivery-section/delivery-section.component";
import {OwnerDetailsComponent} from "../product-details/owner-details/owner-details.component";
import {SendFeedbackFieldComponent} from "../../shared/send-feedback-field/send-feedback-field.component";
import {SimilarAdsComponent} from "../product-details/similar-ads/similar-ads.component";
import {AuthService} from "../../core/_services/auth.service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../core/store/actions/Auth/auth.actions";

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
    SimilarAdsComponent
  ],
  templateUrl: './suivre-commande.component.html',
  styleUrl: './suivre-commande.component.css'
})
export class SuivreCommandeComponent implements OnInit {
  title = 'Eside-frontend';

  constructor(private authService: AuthService, private router: Router, private store: Store) {
  }

  ngOnInit(): void {

    //this.store.dispatch(AuthActions.checkAuth())
    //this.store.dispatch(AuthActions.getUserInfo())
  }
}
