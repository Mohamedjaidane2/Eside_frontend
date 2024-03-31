import { Component } from '@angular/core';
import {OrderStatusTimeLineComponent} from "./order-status-time-line/order-status-time-line.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ClientsFeedbackComponent} from "../home/clients-feedback/clients-feedback.component";
import {DeliverySectionComponent} from "../../shared/delivery-section/delivery-section.component";
import {OwnerDetailsComponent} from "../product-details/owner-details/owner-details.component";
import {SendFeedbackFieldComponent} from "../../shared/send-feedback-field/send-feedback-field.component";
import {SimilarAdsComponent} from "../product-details/similar-ads/similar-ads.component";

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
export class SuivreCommandeComponent {

}
