import { Component } from '@angular/core';
import {DeliverySectionComponent} from "../../shared/delivery-section/delivery-section.component";
import {OwnerDetailsComponent} from "./owner-details/owner-details.component";
import {ClientsFeedbackComponent} from "../home/clients-feedback/clients-feedback.component";
import {SimilarAdsComponent} from "./similar-ads/similar-ads.component";
import {SendFeedbackFieldComponent} from "../../shared/send-feedback-field/send-feedback-field.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    DeliverySectionComponent,
    OwnerDetailsComponent,
    ClientsFeedbackComponent,
    SimilarAdsComponent,
    SendFeedbackFieldComponent
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

}
